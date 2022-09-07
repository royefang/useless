FROM python:3

ENV PYTHONUNBUFFERED 1

RUN mkdir /django_project

WORKDIR /django_project

COPY . .

COPY ./requirements.txt /requirements.txt

RUN pip install -r /requirements.txt

EXPOSE 8000