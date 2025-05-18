import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Panga API",
            version: "1.0.0",
            description: "API documentation for Car Parking Management System",
            contact: {
                name: "API Support",
                email: "support@panga.com"
            }
        },
        servers: [
            {
                url: "http://localhost:8082",
                description: "Local server for development"
            },
        ],
        tags: [
            {
                name: "Auth",
                description: "Authentication endpoints"
            },
            {
                name: "Users",
                description: "User management endpoints"
            },
            {
                name: "Vehicles",
                description: "Vehicle management endpoints"
            },
            {
                name: "Parking Sessions",
                description: "Parking session management endpoints"
            },
            {
                name: "Parking Slots",
                description: "Parking slot management endpoints"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                },
            },
            schemas: {
                Error: {
                    type: "object",
                    properties: {
                        success: {
                            type: "boolean",
                            example: false
                        },
                        message: {
                            type: "string",
                            example: "Error message"
                        }
                    }
                },
                ParkingSession: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            example: 1
                        },
                        vehicle_number_plate: {
                            type: "string",
                            example: "ABC123"
                        },
                        parking_slot_id: {
                            type: "string",
                            example: "A1"
                        },
                        entry_time: {
                            type: "string",
                            format: "date-time",
                            example: "2023-05-16T12:00:00Z"
                        },
                        ower_name: {
                            type: "string",
                            example: "John Doe"
                        },
                        owner_email: {
                            type: "string",
                            example: "john.doe@example.com"
                        },
                        exit_time: {
                            type: "string",
                            format: "date-time",
                            example: "2023-05-16T15:00:00Z"
                        },
                        status: {
                            type: "string",
                            enum: ["PARKING", "OUT"],
                            example: "PARKING"
                        }
                    }
                },
                ParkingSessionInput: {
                    type: "object",
                    required: ["vehicle_number_plate", "driver_name", "driver_email", "parking_slot_id", "entry_time"],
                    properties: {
                        vehicle_number_plate: {
                            type: "string",
                            example: "ABC123"
                        },
                        driver_name: {
                            type: "string",
                            example: "John Doe"
                        },
                        driver_email: {
                            type: "string",
                            example: "john.doe@example.com"
                        },
                        parking_slot_id: {
                            type: "string",
                            example: "A1"
                        },
                        entry_time: {
                            type: "string",
                            format: "date-time",
                            example: "2023-05-16T12:00:00Z"
                        }
                    }
                },
                ParkingSessionUpdateInput: {
                    type: "object",
                    properties: {
                        car_plate: {
                            type: "string",
                            example: "ABC123"
                        },
                        slot_id: {
                            type: "string",
                            example: "A1"
                        },
                        driver_name: {
                            type: "string",
                            example: "John Doe"
                        },
                        driver_email: {
                            type: "string",
                            example: "john.doe@example.com"
                        }
                    }
                },
                ParkingSessionEndInput: {
                    type: "object",
                    required: ["exit_time"],
                    properties: {
                        exit_time: {
                            type: "string",
                            format: "date-time",
                            example: "2023-05-16T15:00:00Z"
                        }
                    }
                },
                PaginatedResponse: {
                    type: "object",
                    properties: {
                        success: {
                            type: "boolean",
                            example: true
                        },
                        message: {
                            type: "string",
                            example: "Data fetched successfully"
                        },
                        currentPage: {
                            type: "integer",
                            example: 1
                        },
                        totalPages: {
                            type: "integer",
                            example: 5
                        },
                        totalItems: {
                            type: "integer",
                            example: 50
                        },
                        pageSize: {
                            type: "integer",
                            example: 10
                        },
                        hasNextPage: {
                            type: "boolean",
                            example: true
                        },
                        hasPreviousPage: {
                            type: "boolean",
                            example: false
                        },
                        data: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ParkingSession"
                            }
                        }
                    }
                },
                Vehicle: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            example: 1
                        },
                        client_Id: {
                            type: "integer",
                            example: 1
                        },
                        vehicle_plate: {
                            type: "string",
                            example: "ABC123"
                        },
                        vehicle_type: {
                            type: "string",
                            example: "Sedan"
                        }
                    }
                },
                VehicleInput: {
                    type: "object",
                    required: ["client_id", "vehicle_number_plate", "vehicle_type"],
                    properties: {
                        client_id: {
                            type: "integer",
                            example: 1
                        },
                        vehicle_number_plate: {
                            type: "string",
                            example: "ABC123"
                        },
                        vehicle_type: {
                            type: "string",
                            example: "Sedan"
                        }
                    }
                },
                VehicleUpdateInput: {
                    type: "object",
                    properties: {
                        vehicle_number_plate: {
                            type: "string",
                            example: "ABC123"
                        },
                        vehicle_type: {
                            type: "string",
                            example: "Sedan"
                        }
                    }
                },
                VehicleWithClientUpdateInput: {
                    type: "object",
                    properties: {
                        New_owner: {
                            type: "integer",
                            example: 2
                        },
                        vehicle_number_plate: {
                            type: "string",
                            example: "ABC123"
                        },
                        vehicle_type: {
                            type: "string",
                            example: "Sedan"
                        }
                    }
                },
                Client: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            example: 1
                        },
                        username: {
                            type: "string",
                            example: "johndoe"
                        },
                        email: {
                            type: "string",
                            format: "email",
                            example: "john.doe@example.com"
                        },
                        role: {
                            type: "string",
                            enum: ["USER", "ADMIN"],
                            example: "USER"
                        }
                    }
                },
                ClientInput: {
                    type: "object",
                    required: ["name", "email", "password", "role"],
                    properties: {
                        name: {
                            type: "string",
                            example: "John Doe"
                        },
                        email: {
                            type: "string",
                            format: "email",
                            example: "john.doe@example.com"
                        },
                        password: {
                            type: "string",
                            format: "password",
                            example: "password123"
                        },
                        role: {
                            type: "string",
                            enum: ["USER", "ADMIN"],
                            example: "USER"
                        }
                    }
                },
                ClientUpdateInput: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            example: "John Doe"
                        },
                        email: {
                            type: "string",
                            format: "email",
                            example: "john.doe@example.com"
                        },
                        password: {
                            type: "string",
                            format: "password",
                            example: "password123"
                        },
                        role: {
                            type: "string",
                            enum: ["USER", "ADMIN"],
                            example: "USER"
                        }
                    }
                },
                SignUpInput: {
                    type: "object",
                    required: ["name", "email", "password", "role"],
                    properties: {
                        name: {
                            type: "string",
                            example: "John Doe"
                        },
                        email: {
                            type: "string",
                            format: "email",
                            example: "john.doe@example.com"
                        },
                        password: {
                            type: "string",
                            format: "password",
                            example: "password123"
                        },
                        role: {
                            type: "string",
                            enum: ["USER", "ADMIN"],
                            example: "USER"
                        }
                    }
                },
                SignInInput: {
                    type: "object",
                    required: ["email", "password"],
                    properties: {
                        email: {
                            type: "string",
                            format: "email",
                            example: "john.doe@example.com"
                        },
                        password: {
                            type: "string",
                            format: "password",
                            example: "password123"
                        }
                    }
                },
                AuthResponse: {
                    type: "object",
                    properties: {
                        success: {
                            type: "boolean",
                            example: true
                        },
                        message: {
                            type: "string",
                            example: "User found successfully"
                        },
                        data: {
                            $ref: "#/components/schemas/Client"
                        },
                        token: {
                            type: "string",
                            example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                        }
                    }
                },
                ParkingSlot: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            example: 1
                        },
                        slotNumber: {
                            type: "string",
                            example: "A1"
                        },
                        status: {
                            type: "string",
                            enum: ["INUSE", "FREE"],
                            example: "FREE"
                        }
                    }
                },
                ParkingSlotInput: {
                    type: "object",
                    required: ["slotnumber"],
                    properties: {
                        slotnumber: {
                            type: "string",
                            example: "A1"
                        }
                    }
                },
                ParkingSlotStatusUpdate: {
                    type: "object",
                    required: ["status"],
                    properties: {
                        status: {
                            type: "string",
                            enum: ["INUSE", "FREE"],
                            example: "INUSE"
                        }
                    }
                }
            },
            responses: {
                UnauthorizedError: {
                    description: "Access token is missing or invalid",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Error"
                            }
                        }
                    }
                },
                NotFoundError: {
                    description: "Resource not found",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Error"
                            }
                        }
                    }
                },
                BadRequestError: {
                    description: "Invalid request parameters",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Error"
                            }
                        }
                    }
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    },
    apis: ["./Routes/*.ts", "./Routes/*.js", "./Controllers/*.ts", "./Controllers/*.js"]
}

const specs = swaggerJsdoc(options)
export {specs, swaggerUi}
