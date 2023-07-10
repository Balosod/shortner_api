-- CreateTable
CREATE TABLE "Url" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "shorted_link" TEXT NOT NULL,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);
