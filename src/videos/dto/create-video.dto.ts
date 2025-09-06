import { IsNotEmpty, IsUrl, Length } from "class-validator"

export class CreateVideoDto {

    @IsNotEmpty()
    @Length(1,100)
    title: string

    @IsNotEmpty()
    @Length(1,100)
    description: string

    @IsNotEmpty()
    @IsUrl()
    src: string
}
