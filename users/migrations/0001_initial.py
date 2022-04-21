# Generated by Django 4.0.3 on 2022-03-27 12:16

import uuid

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="User",
            fields=[
                ("uid", models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ("username", models.CharField(max_length=64)),
                ("firstname", models.CharField(max_length=64)),
                ("lastname", models.CharField(max_length=64)),
                ("email", models.EmailField(max_length=254)),
            ],
        ),
    ]