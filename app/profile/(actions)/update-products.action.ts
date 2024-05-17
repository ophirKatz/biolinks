"use server";

import { UserProductModel } from "@/models/UserProfile";
import { saveUserProducts } from "@/utils/api/profiles-api";

export default async function submitProductsAction(
  products: UserProductModel[]
) {
  console.log("Submitting products", products);
  await saveUserProducts(products);
}
