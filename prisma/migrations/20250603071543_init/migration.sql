-- CreateEnum
CREATE TYPE "QuoteStatus" AS ENUM ('PENDING', 'RESPONDED', 'CLOSED');

-- CreateEnum
CREATE TYPE "DataType" AS ENUM ('TEXT', 'NUMBER', 'BOOLEAN');

-- CreateEnum
CREATE TYPE "SpecificationCategory" AS ENUM ('ELECTRICAL', 'MECHANICAL', 'ENVIRONMENTAL', 'CONSTRUCTION');

-- CreateTable
CREATE TABLE "cable_categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "display_order" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cable_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "standards" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "full_name" VARCHAR(200),
    "description" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "standards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "industries" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "industries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cables" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "model_number" VARCHAR(100),
    "category_id" INTEGER NOT NULL,
    "description" TEXT,
    "short_description" VARCHAR(500),
    "voltage_rating" VARCHAR(50),
    "conductor_material" VARCHAR(50),
    "conductor_size" VARCHAR(50),
    "insulation_material" VARCHAR(100),
    "sheath_material" VARCHAR(100),
    "overall_diameter_mm" DECIMAL(8,2),
    "weight_per_km_kg" DECIMAL(10,2),
    "min_bending_radius_mm" INTEGER,
    "operating_temp_min" INTEGER,
    "operating_temp_max" INTEGER,
    "installation_temp_min" INTEGER,
    "installation_temp_max" INTEGER,
    "number_of_cores" INTEGER,
    "core_arrangement" VARCHAR(50),
    "armoring_type" VARCHAR(100),
    "is_flame_retardant" BOOLEAN NOT NULL DEFAULT false,
    "is_fire_resistant" BOOLEAN NOT NULL DEFAULT false,
    "product_image_url" VARCHAR(500),
    "cross_section_image_url" VARCHAR(500),
    "slug" VARCHAR(200),
    "meta_title" VARCHAR(200),
    "meta_description" VARCHAR(300),
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "display_order" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cable_standards" (
    "id" SERIAL NOT NULL,
    "cable_id" INTEGER NOT NULL,
    "standard_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cable_standards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cable_industries" (
    "id" SERIAL NOT NULL,
    "cable_id" INTEGER NOT NULL,
    "industry_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cable_industries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cable_applications" (
    "id" SERIAL NOT NULL,
    "cable_id" INTEGER NOT NULL,
    "application_name" VARCHAR(200) NOT NULL,
    "description" TEXT,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cable_applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "specification_types" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "data_type" VARCHAR(20) NOT NULL DEFAULT 'text',
    "unit" VARCHAR(20),
    "category" VARCHAR(50),
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "specification_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cable_specifications" (
    "id" SERIAL NOT NULL,
    "cable_id" INTEGER NOT NULL,
    "specification_type_id" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cable_specifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quote_requests" (
    "id" SERIAL NOT NULL,
    "cable_id" INTEGER NOT NULL,
    "customer_name" VARCHAR(200) NOT NULL,
    "customer_email" VARCHAR(200) NOT NULL,
    "customer_phone" VARCHAR(20),
    "company_name" VARCHAR(200),
    "quantity_required" INTEGER,
    "length_required_meters" INTEGER,
    "project_details" TEXT,
    "delivery_location" VARCHAR(300),
    "expected_delivery_date" DATE,
    "additional_requirements" TEXT,
    "status" VARCHAR(50) NOT NULL DEFAULT 'pending',
    "admin_notes" TEXT,
    "responded_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quote_requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cable_categories_name_key" ON "cable_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "standards_name_key" ON "standards"("name");

-- CreateIndex
CREATE UNIQUE INDEX "industries_name_key" ON "industries"("name");

-- CreateIndex
CREATE UNIQUE INDEX "cables_model_number_key" ON "cables"("model_number");

-- CreateIndex
CREATE UNIQUE INDEX "cables_slug_key" ON "cables"("slug");

-- CreateIndex
CREATE INDEX "cables_category_id_idx" ON "cables"("category_id");

-- CreateIndex
CREATE INDEX "cables_is_active_idx" ON "cables"("is_active");

-- CreateIndex
CREATE INDEX "cables_is_featured_idx" ON "cables"("is_featured");

-- CreateIndex
CREATE INDEX "cables_slug_idx" ON "cables"("slug");

-- CreateIndex
CREATE INDEX "cable_standards_cable_id_idx" ON "cable_standards"("cable_id");

-- CreateIndex
CREATE INDEX "cable_standards_standard_id_idx" ON "cable_standards"("standard_id");

-- CreateIndex
CREATE UNIQUE INDEX "cable_standards_cable_id_standard_id_key" ON "cable_standards"("cable_id", "standard_id");

-- CreateIndex
CREATE INDEX "cable_industries_cable_id_idx" ON "cable_industries"("cable_id");

-- CreateIndex
CREATE INDEX "cable_industries_industry_id_idx" ON "cable_industries"("industry_id");

-- CreateIndex
CREATE UNIQUE INDEX "cable_industries_cable_id_industry_id_key" ON "cable_industries"("cable_id", "industry_id");

-- CreateIndex
CREATE INDEX "cable_applications_cable_id_idx" ON "cable_applications"("cable_id");

-- CreateIndex
CREATE UNIQUE INDEX "specification_types_name_key" ON "specification_types"("name");

-- CreateIndex
CREATE INDEX "cable_specifications_cable_id_idx" ON "cable_specifications"("cable_id");

-- CreateIndex
CREATE INDEX "cable_specifications_specification_type_id_idx" ON "cable_specifications"("specification_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "cable_specifications_cable_id_specification_type_id_key" ON "cable_specifications"("cable_id", "specification_type_id");

-- CreateIndex
CREATE INDEX "quote_requests_cable_id_idx" ON "quote_requests"("cable_id");

-- CreateIndex
CREATE INDEX "quote_requests_status_idx" ON "quote_requests"("status");

-- CreateIndex
CREATE INDEX "quote_requests_created_at_idx" ON "quote_requests"("created_at");

-- AddForeignKey
ALTER TABLE "cables" ADD CONSTRAINT "cables_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "cable_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cable_standards" ADD CONSTRAINT "cable_standards_cable_id_fkey" FOREIGN KEY ("cable_id") REFERENCES "cables"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cable_standards" ADD CONSTRAINT "cable_standards_standard_id_fkey" FOREIGN KEY ("standard_id") REFERENCES "standards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cable_industries" ADD CONSTRAINT "cable_industries_cable_id_fkey" FOREIGN KEY ("cable_id") REFERENCES "cables"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cable_industries" ADD CONSTRAINT "cable_industries_industry_id_fkey" FOREIGN KEY ("industry_id") REFERENCES "industries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cable_applications" ADD CONSTRAINT "cable_applications_cable_id_fkey" FOREIGN KEY ("cable_id") REFERENCES "cables"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cable_specifications" ADD CONSTRAINT "cable_specifications_cable_id_fkey" FOREIGN KEY ("cable_id") REFERENCES "cables"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cable_specifications" ADD CONSTRAINT "cable_specifications_specification_type_id_fkey" FOREIGN KEY ("specification_type_id") REFERENCES "specification_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quote_requests" ADD CONSTRAINT "quote_requests_cable_id_fkey" FOREIGN KEY ("cable_id") REFERENCES "cables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
