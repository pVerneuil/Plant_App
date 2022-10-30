import paho.mqtt.client as mqtt
import requests
import time
import json

#! API SETTINGS

# base_url = 'http://backend:8000/'
base_url = "http://127.0.0.1:8000/"

feedback_endpoint = "feedback/"
emplacement_endpoint = "emplacement/"
sensor_enpoint = "sensor/"
device_endpoint = "device/"

#! MQTT SETTINGS
MQTT_HOST = "192.168.0.200"
MQTT_PORT = 1883
MQTT_CLIENT_ID = "Python MQTT client"
MQTT_USER = "paul"
MQTT_PASSWORD = "paul"
TOPIC = "iot/data/#"


def message_data_to_post_data(message_data):
    # Getting the device id
    device_list = requests.get(base_url + device_endpoint).json()['results']
    device_name_from_mqtt_message = message_data["device"]
    device_id = None
    for device in device_list:
        if device["name"] == device_name_from_mqtt_message:
            device_id = device["id"]

    # Getting the sensors plug into that device
    sensor_pluged_in_device_list = requests.get(
        base_url + sensor_enpoint + f"?plug_in_device={device_id}"
    ).json()['results']
    # compiling and formating data to post request format
    data_set_to_post = []
    for sensor in sensor_pluged_in_device_list:
        temp_data = {
            "value": message_data["sensor/data"][sensor["name"]],
            "type": sensor["type"],
            "comming_from": sensor["id"],
        }
        data_set_to_post.append(temp_data)
    return data_set_to_post

def on_connect(mqtt_client, user_data, flags, conn_result):
    mqtt_client.subscribe(TOPIC)
    


def on_message(mqtt_client, user_data, message):
    payload = message.payload.decode("utf-8")
    message_data = json.loads(payload)
    data_list_to_post = message_data_to_post_data(message_data)
    for data in data_list_to_post :
        requests.post(base_url+ feedback_endpoint, json = data)
    

def main():
    mqtt_client = mqtt.Client(MQTT_CLIENT_ID)
    mqtt_client.username_pw_set(MQTT_USER, MQTT_PASSWORD)

    mqtt_client.on_connect = on_connect
    mqtt_client.on_message = on_message

    mqtt_client.connect(MQTT_HOST, MQTT_PORT)
    mqtt_client.loop_forever()


main()
