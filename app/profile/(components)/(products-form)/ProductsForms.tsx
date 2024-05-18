import { UserProductModel, UserProfileModel } from "@/models/UserProfile";
import React, { useEffect, useMemo, useState } from "react";

type ProductEditModel = UserProductModel & {
  isExpanded: boolean;
  isRemoved: boolean;
};

type ProductEditBoxProps = {
  product: ProductEditModel;
  onClick: () => void;
  onSave: (product: ProductEditModel) => void;
  onRemove: () => void;
};

function ProductEditBox(props: ProductEditBoxProps) {
  const [product, setProduct] = useState(props.product);

  const title = useMemo(() => {
    return product.title.length === 0 ? "מוצר חדש" : product.title;
  }, [product]);

  const updateProduct = (changes: Partial<UserProductModel>) => {
    console.log("changes", changes);
    setProduct({
      ...product,
      ...changes,
    });
    console.log("Changed product: ", product);
  };

  return (
    <div className="min-h-16 bg-white/30 rounded-md flex flex-col cursor-pointer">
      <div
        className="h-16 flex items-center justify-center text-white text-lg"
        onClick={props.onClick}
      >
        {title}
      </div>
      {props.product.isExpanded ? (
        <div className="flex flex-col px-4 gap-4">
          <div className="w-full flex flex-col gap-2">
            <label className="text-md mt-2 text-end mr-4">כותרת</label>
            <input
              dir="rtl"
              className="w-full c1 rounded-lg h-16 px-2 text-md text-stone-500 flex items-center justify-center"
              type="text"
              name="title"
              placeholder="כותרת"
              autoComplete="false"
              autoCorrect="false"
              required
              value={product.title}
              onChange={(e) => updateProduct({ title: e.target.value })}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-md mt-2 text-end mr-4">היפר קישור</label>
            <input
              dir="rtl"
              className="w-full c1 rounded-lg h-16 px-2 text-md text-stone-500 flex items-center justify-center"
              type="text"
              name="title"
              placeholder="היפר קישור"
              autoComplete="false"
              autoCorrect="false"
              required
              value={product.url}
              onChange={(e) => updateProduct({ url: e.target.value })}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-md mt-2 text-end mr-4">מידע נוסף</label>
            <textarea
              dir="rtl"
              className="w-full c1 h-24 rounded-lg px-2 text-md text-stone-500 flex items-center justify-center"
              name="title"
              placeholder="מידע נוסף"
              autoComplete="false"
              autoCorrect="false"
              required
              value={product.description}
              onChange={(e) => updateProduct({ description: e.target.value })}
            />
          </div>

          <div className="w-full flex justify-between gap-4 mt-4">
            <button
              className="flex-1 w-full h-16 flex justify-center items-center text-lg font-bold rounded-lg c1"
              onClick={() => props.onRemove()}
            >
              מחיקה
            </button>
            <button
              className="flex-1 w-full h-16 flex justify-center items-center text-lg font-bold rounded-lg c2"
              onClick={() => props.onSave(product)}
            >
              שמירה
            </button>
          </div>
          <div></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export type ProductsFormProps = {
  profile: UserProfileModel;
  onUpdate: (products: UserProductModel[]) => void;
  onBack: () => void;
  onSave: () => void;
};

export default function ProductsForm(props: ProductsFormProps) {
  const [products, setProducts] = useState<ProductEditModel[]>(
    props.profile.products.map((p, i) => {
      return {
        ...p,
        isExpanded: props.profile.products.length - 1 === i,
        isRemoved: false,
      };
    })
  );

  const onSaveProduct = (product: ProductEditModel, index: number) => {
    setProducts(products.map((p, i) => (i === index ? product : p)));
  };

  const onRemoveProduct = (index: number) => {
    setProducts(
      products.map((p, i) =>
        i === index
          ? {
              ...p,
              isRemoved: true,
            }
          : p
      )
    );
  };

  const onProductBoxClick = (index: number) => {
    setProducts(
      products.map((p, i) =>
        i === index
          ? {
              ...p,
              isExpanded: !p.isExpanded,
            }
          : p
      )
    );
  };

  const onAddNewProduct = () => {
    setProducts([
      ...products.map((p) => ({ ...p, isExpanded: false })),
      {
        id: "",
        user_id: props.profile.id,
        title: "",
        description: "",
        url: "",
        isExpanded: true,
        isRemoved: false,
      },
    ]);
  };

  const saveProducts = () => {
    const productsUpdate: UserProductModel[] = products.map((p) => {
      const { isExpanded, ...product } = p;
      return product;
    });
    props.onSave();
  };

  useEffect(() => {
    if (props.profile.products.length === 0) {
      setTimeout(() => onAddNewProduct(), 200);
    }
    return () => {};
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-8 font-bold pt-8">
      <span className="text-xl pb-8">מוצרים</span>

      <div className="flex flex-col w-full justify-center text-foreground gap-4">
        <div className="flex flex-col gap-4 px-8">
          {products
            .filter((p) => !p.isRemoved)
            .map((product, index) => (
              <ProductEditBox
                key={index}
                product={product}
                onClick={() => onProductBoxClick(index)}
                onSave={(p) => onSaveProduct(p, index)}
                onRemove={() => onRemoveProduct(index)}
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
            onClick={saveProducts}
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
