FROM nexus.action-media.ru/docker-action-base/base-service-php74-gost:latest as local

ENV PHP_DISPLAY_ERRORS 0
ENV PHP_ERROR_REPORTING 22527

WORKDIR /var/www/

# setup
RUN yum makecache \
    && yum -y install git \
                      unzip \
                      php-pecl-xdebug \
                      xorg-x11-server-Xvfb \
                      wkhtmltopdf \
    && yum -y autoremove \
    && yum clean all \
    && rm -rf /var/cache/yum/

# custom ini
COPY build/docker/app/configs /

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
&& composer global require hirak/prestissimo --no-plugins --no-scripts \
&& wget https://github.com/vimeo/psalm/releases/download/3.8.3/psalm.phar \
&& chmod +x psalm.phar \
&& mv psalm.phar /usr/local/bin/psalm

FROM local as prod

COPY app/composer.json app/composer.lock app/symfony.lock /var/www/

RUN composer install --no-scripts --prefer-dist --no-autoloader

COPY app /var/www

# Finish composer
RUN composer install

RUN chown www-data:www-data /var/www/ -R

#cleanup
RUN composer global remove hirak/prestissimo && \
        rm /usr/local/bin/composer && \
        rm /usr/local/bin/psalm && \
        yum remove -y git \
                      unzip \
                      php-pecl-xdebug \
        rm /etc/php.d/xdebug.ini

CMD ["/bin/sh", "-c", "sh /opt/start.sh"]

