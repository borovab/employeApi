# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy only the backend folder
COPY backend/ ./backend/

# Set working dir inside backend
WORKDIR /src/backend

# Publish the project
RUN dotnet publish -c Release -o /app

# Runtime staged
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "EmployeeApi.dll"]
