from email import message
import paho.mqtt.client as mqtt
import requests
import time
import json


# Broker stuff
BROKER_HOST = "192.168.0.200"
BROKER_USERNAME = "paul"
BROKER_PASSWORD = "paul"
TOPIC_FEEDBACK = "iot/data/greenhousepi"
TOPIC_INSTRUCTION = "iot/instrucions/greenhousepi"
# API
base_url ='http://127.0.0.1:8000/'


client = mqtt.Client()

# Set access token
client.username_pw_set(BROKER_USERNAME, password=BROKER_PASSWORD)

# Connect to Broker
client.connect(BROKER_HOST, 1883, 60)
client.loop_start()
try:
    while True:
        instructions_to_send_res = requests.get(base_url+'/instruction/?is_sent=false')
        instructions_to_send = json.loads(instructions_to_send_res.text)["results"]
        for instruction in instructions_to_send:
            gpio_res = requests.get(base_url+'/actuator/'+str(instruction['actuator']))
            gpio = json.loads(gpio_res.text)['gpio']
            mqtt_message_payload= {
                "gpio": gpio,
                "duration": instruction["duration"],
                "instruction_id": instruction["id"]
            }
            publish_message = client.publish(TOPIC_INSTRUCTION, json.dumps(mqtt_message_payload, indent=4), 1)
            try: 
                publish_message.wait_for_publish()
                if publish_message.is_published():
                    requests.patch(base_url+'/instruction/'+str(instruction["id"])+'/', data={"is_sent":'true'})
            except ValueError :
                print("Message is not queued")
                continue
            except RuntimeError :
                print("There was an error when publishing, most likely due to the client not being connected")
                continue
        time.sleep(5)
except KeyboardInterrupt:
    pass
    


client.loop_stop()
client.disconnect()

