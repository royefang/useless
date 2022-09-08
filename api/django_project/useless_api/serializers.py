from rest_framework import serializers
from useless_api.models import UselessFact

class UselessFactSerializer(serializers.ModelSerializer):

    class Meta:
        model = UselessFact
        fields = ['id', 'fact', 'submit_ts']
    