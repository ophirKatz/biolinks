import { UserProductModel, UserProfileModel } from "@/models/UserProfile";
import React, { useEffect, useState } from "react";

export type ProductsFormProps = {
  profile: UserProfileModel;
  onBack: () => void;
  onSave: (products: UserProductModel[]) => void;
};

type ProductEditModel = UserProductModel & { isExpanded: boolean };

type ProductEditBoxProps = {
  product: ProductEditModel;
  onSave: (product: ProductEditModel) => void;
  onRemove: () => void;
};

function ProductEditBox(props: ProductEditBoxProps) {
  return (
    <div className="min-h-16 bg-white/30 rounded-md flex flex-col">
      <div className="h-16 flex items-center justify-center text-white">
        {props.product.title}
      </div>
      {props.product.isExpanded ? (
        <div className="flex flex-col px-4 gap-4">
          <label className="text-md mt-2 text-end mr-4">כותרת</label>
          <div className="w-full bg-transparent">
            <input
              className="w-full bg-white/10 rounded-lg flex items-center justify-center h-16 px-2 text-end text-md text-stone-500"
              type="text"
              name="title"
              placeholder="כותרת"
              autoComplete="false"
              autoCorrect="false"
              required
            />
          </div>
          <div></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default function ProductsForm(props: ProductsFormProps) {
  const [products, setProducts] = useState<ProductEditModel[]>(
    props.profile.products.map((p, i) => {
      return { ...p, isExpanded: props.profile.products.length - 1 === i };
    })
  );

  const onSaveProduct = (product: ProductEditModel, index: number) => {
    setProducts(products.map((p, i) => (i == index ? product : p)));
  };

  const onRemoveProduct = () => {};

  const onProductBoxClick = (index: number) => {};

  const onAddNewProduct = () => {
    setProducts([
      ...products.map((p) => ({ ...p, isExpanded: false })),
      {
        id: "",
        title: "מוצר חדש",
        description: "",
        url: "",
        isExpanded: true,
      },
    ]);
  };

  useEffect(() => {
    setTimeout(() => onAddNewProduct(), 200);
    return () => {};
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-8 font-bold pt-20">
      <span className="text-xl pb-8">מוצרים</span>

      <div className="flex flex-col w-full justify-center text-foreground gap-4">
        <div className="flex flex-col gap-4 px-8">
          {products.map((product, index) => (
            <ProductEditBox
              key={index}
              product={product}
              onSave={(p) => onSaveProduct(p, index)}
              onRemove={onRemoveProduct}
            />
          ))}
          <button
            className="h-16 rounded-md border bg-white/10 flex items-center justify-center text-white/50 text-lg"
            onClick={onAddNewProduct}
          >
            הוסיפו מוצר חדש
          </button>
        </div>

        <div className="border-t h-16 w-full flex mt-16">
          <button
            className="flex-1 w-full h-full flex justify-center items-center text-lg font-bold"
            type="button"
            onClick={() => props.onSave(products)}
          >
            Save
          </button>
          <button
            className="flex-1 w-full h-full flex justify-center items-center text-lg font-bold"
            type="button"
            onClick={props.onBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
