import { appliquerCoupon } from './gestionRemise.js';

function couponDejaApplique(article, coupon) {
    return article.couponsAppliques.includes(coupon);
}

export function testCouponUniqueParArticle() {
    const article = { id: 123, nom: "Produit B", prix: 50, couponsAppliques: [] };
    const coupon = "COUPON456";

    const resultatPremiereApplication = appliquerCoupon(article, coupon);
    console.log(resultatPremiereApplication);
    console.log("Nouveau prix du produit:", article.prix);

    const resultatDeuxiemeApplication = appliquerCoupon(article, coupon);
    console.log(resultatDeuxiemeApplication);
}

testCouponUniqueParArticle();
