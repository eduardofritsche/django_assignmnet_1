from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^contact/', include('contact.urls')),
    url(r'^home/', include('home.urls')),
    url(r'^reservation/', include('reservation.urls')),
    url(r'^rooms/', include('rooms.urls')),
]
