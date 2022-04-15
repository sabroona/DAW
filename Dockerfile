FROM python:3.7-slim

COPY ./requirements.txt /opt/app/requirements.txt
WORKDIR /opt/app

# install the packages
RUN pip install --no-cache --upgrade pip \
    && pip install --no-cache -r requirements.txt

# create user with a home directory
ARG NB_USER=jovyan
ARG NB_UID=1000
ENV USER ${NB_USER}
ENV NB_UID ${NB_UID}
ENV HOME /home/${NB_USER}

RUN adduser --disabled-password \
    --gecos "Default user" \
    --uid ${NB_UID} \
    ${NB_USER}
WORKDIR ${HOME}

USER root
# copy all content to home directory and make the files owned by the created user
COPY . ${HOME}
RUN chown -R ${NB_UID} ${HOME}
USER ${NB_USER}

EXPOSE 8888
CMD ["jupyter", "notebook", "--port=8888", "--no-browser", "--ip=0.0.0.0", "--allow-root"]


