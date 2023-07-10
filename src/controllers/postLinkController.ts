import express, { Request, Response } from 'express';
import prisma from '../DB/prisma';
import ShortUniqueId from 'short-unique-id';
import { StatusCodes } from 'http-status-codes';

const postLink = async (req: Request, res: Response): Promise<Response> => {
    const { link } = req.body;
    if (link) {
        const uid = new ShortUniqueId();
        const id = uid();
        try {
            const shortenLink = await prisma.url.create({
                data: {
                    link,
                    shorted_link: id,
                },
            });
            return res.status(StatusCodes.OK).json({ message: shortenLink });
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: error });
        }
    }
    return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Link can't be empty" });
};

export default postLink;
