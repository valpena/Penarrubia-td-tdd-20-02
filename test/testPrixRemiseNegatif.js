import { appliquerCoupon } from './gestionRemise.js';

export function testPrixRemiseNegatif() {
    const article = { id: 123, nom: "Produit C", prix: 10 };
    const coupon = "COUPON789";

    const resultat = appliquerCoupon(article, coupon);
    console.log(resultat);
    console.log("Nouveau prix du produit:", article.prix);
}

testPrixRemiseNegatif();