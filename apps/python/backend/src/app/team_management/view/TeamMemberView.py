from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import ValidationError
from src.app.team_management.model.TeamMember import TeamMember, TeamMemberSerializer
import logging

logger = logging.getLogger(__name__)

class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset            = TeamMember.objects.all()
    serializer_class    = TeamMemberSerializer

    def create(self, request, *args, **kwargs):
        try:
            return super().create(request, *args, **kwargs)
        except ValidationError as e:
            logger.warning("Email already exists")
            logger.warning(e)
            return Response({'error': e.detail}, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        try:
            return super().update(request, *args, **kwargs)
        except ValidationError as e:
            return Response({'error': e.detail}, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, *args, **kwargs):
        try:
            return super().destroy(request, *args, **kwargs)
        except Exception as e:
            return Response({'error': str(e)}, status=400)
