import { Card } from "@prisma/client";

export interface TokenPayload {
	id: string;
	email: string;
	username: string | null;
}

export interface SignupFormData {
	username: string;
	email: string;
	password: string;
}

export interface LoginFormData {
	email: string;
	password: string;
}

export interface CreateCardRequest {
	cardName: string;
	bankName: string;
	cardNumber: number;
	cardType: string;
	expiryDate: string;
}

export interface CardResponse {
	success: boolean;
	message?: string;
	cards?: Card[];
	token?: string;
}

export interface CardRequest {
	cardName: string;
	bankName: string;
	cardNumber: number;
	cardType: string;
	expiryDate: string;
}
