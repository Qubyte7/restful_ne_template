# Use a lightweight Alpine-based PostgreSQL image
FROM postgres:16-alpine

# Set environment variables (adjust as needed)
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres@123
ENV POSTGRES_DB=car_park

# Expose the PostgreSQL port
EXPOSE 5432

# The default command to run the PostgreSQL server
CMD ["postgres"]

# some commands involved
#(building docker image) ::===> ( docker build -t my-database-image-name . )
# run & creak a container ::==> (docker run -d --name container-name -p HOSTPORT:CONTAINERPORT -e POSTGRES_PASSWORD=postgres_password my-database-image-name)

