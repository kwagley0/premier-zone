FROM maven:3.9.5-openjdk-21 AS build
WORKDIR /app
COPY backend /app
RUN mvn clean package -DskipTests

FROM openjdk:21-jdk-slim
COPY --from=build /app/target/PremierZone-0.0.1-SNAPSHOT.jar PremierZone.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","PremierZone.jar"]