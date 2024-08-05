FROM maven:3.9.4-eclipse-temurin-21-alpine AS build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:21.0.4_7-jdk
COPY /target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]