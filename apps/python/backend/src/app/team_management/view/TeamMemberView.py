from rest_framework import viewsets
from src.app.team_management.model.TeamMember import TeamMember, TeamMemberSerializer

class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset            = TeamMember.objects.all()
    serializer_class    = TeamMemberSerializer
