import { appliquerCoupon } from './gestionRemise.js';

export function testCouponApplique() {
    const article = { id: 123, nom: "Produit A", prix: 100 };
    const coupon = "COUPON123";

    const resultat = appliquerCoupon(article, coupon);
    console.log(resultat);
    console.log("Nouveau prix du produit:", article.prix);
}
testCouponApplique();