FROM python:latest

ENV PYTHONUNBUFFERED 1
WORKDIR /mqtt_listener
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .

CMD [ "python", "./mqtt_listener.py"]