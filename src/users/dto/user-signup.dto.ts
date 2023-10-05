import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserSignUp{

    @IsNotEmpty({message:'Name canot be null'})
    @IsString({message:'Name should be string'})
    name:string;

    @IsNotEmpty({message:'Email canot be null'})
    @IsEmail({},{message:'Please provide a valid email'})
    email:string;
    @IsNotEmpty({message:'Password canot be empty'})
    @MinLength(5,{message:'Minimum character should be 5'})
    password:string;


}