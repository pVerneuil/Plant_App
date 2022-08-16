import paho.mqtt.client as mqtt
import requests
import time

#! API SETTINGS

base_url = 'http://backend:8000/'
data_collection_endpoint ='feedback/'

 #! MQTT SETTINGS
MQTT_HOST = 'ubuntu.local'
MQTT_PORT = 1883
MQTT_CLIENT_ID = 'Python MQTT client'
MQTT_USER = 'paul'
MQTT_PASSWORD = 'paul'
TOPIC = 'iot/data/#'


    
 
def find_data_type_from_topic(topic):
    return topic.split('/')[3]
def find_device_from_topic(topic):
    return topic.split('/')[2]
 
def on_connect(mqtt_client, user_data, flags, conn_result):
    mqtt_client.subscribe(TOPIC)
 

 
def on_message(mqtt_client, user_data, message):
    payload = message.payload.decode('utf-8')
    topic = message.topic
    datadict ={
        'value':'',
        'type':'TEMP',
        'comming_from':'1',
    }
    datadict['value'] =payload
    r = requests.post(base_url+data_collection_endpoint, data =datadict)
    print(f"topic : {topic} message : {payload}")
 


def main(): 
    mqtt_client = mqtt.Client(MQTT_CLIENT_ID)
    mqtt_client.username_pw_set(MQTT_USER, MQTT_PASSWORD)
 
    mqtt_client.on_connect = on_connect
    mqtt_client.on_message = on_message
 
    mqtt_client.connect(MQTT_HOST, MQTT_PORT)
    mqtt_client.loop_forever()
 
 
main()