FROM openjdk:17-alpine
WORKDIR /app
COPY target/*.jar ./spring-security.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "spring-security.jar"]
