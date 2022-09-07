from rest_framework import serializers
from useless_api.models import UselessFact

class UselessFactSerializer(serializers.ModelSerializer):

    class Meta:
        model = UselessFact
        fields = ['id', 'fact', 'submit_ts']
    # id = serializers.IntegerField(read_only=True)
    # fact = serializers.CharField(max_length=200)

    # def create(self, data):
    #     """
    #     Create and return a new 'UselessFact' instance
    #     """
    #     return UselessFact.objects.create(**data)

    # def update(self, instance, data):
    #     """
    #     Update and return existing 'UselessFact' instance
    #     """
    #     instance.fact = data.get('fact', instance.fact)
    #     instance.save()
    #     return instance