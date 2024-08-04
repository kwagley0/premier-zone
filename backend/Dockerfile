FROM eclipse-temurin:21-jdk AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:21-jdk-slim
COPY --from=build /target/PremierZone-0.0.1-SNAPSHOT.jar PremierZone.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","PremierZone.jar"]