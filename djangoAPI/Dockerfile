FROM python:3.10-alpine3.15

ENV PYTHONUNBUFFERED 1

WORKDIR /djangoAPI
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .