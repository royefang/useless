# Generated by Django 4.1.1 on 2022-09-07 05:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UselessFact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fact', models.CharField(max_length=200)),
                ('submit_ts', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['submit_ts'],
            },
        ),
    ]