FROM openjdk:17-jdk-slim

ARG FILE_JAR=target/*.jar

WORKDIR /app

COPY ${FILE_JAR} mockproject-be.jar

ENTRYPOINT ["java", "-jar", "mockproject-be.jar"]

EXPOSE 8080
