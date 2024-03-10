// describes user controller
import express, { Request, Response } from "express";
import prisma from "../prisma.js";

const getMany = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({ users });
};

const get = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id);
  const user = await prisma.user.findFirst({
    where: { id: id },
    include: {
      posts: true,
    },
  });

  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  res.json({ user });
};

export default { getMany, get };
