FROM python:3.10
ENV PYTHONUNBUFFERED 1
RUN mkdir -p /app/api/django_project
WORKDIR /app/api/django_project
COPY ./requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000