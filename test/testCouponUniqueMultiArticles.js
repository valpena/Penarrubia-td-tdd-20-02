import { appliquerCoupon } from './gestionRemise.js';

export function testCouponUniqueMultiArticles() {

    const premierArticle = { id: 123, nom: "Produit A", prix: 50, couponsAppliques: [] };
    const coupon = "COUPON123";

    const resultatPremierArticle = appliquerCoupon(premierArticle, coupon);
    console.log(resultatPremierArticle);
    console.log("Nouveau prix du premier produit:", premierArticle.prix);

    const deuxiemeArticle = { id: 456, nom: "Produit B", prix: 70, couponsAppliques: [] };

    const resultatDeuxiemeArticle = appliquerCoupon(deuxiemeArticle, coupon);
    console.log(resultatDeuxiemeArticle);
    console.log("Nouveau prix du deuxième produit:", deuxiemeArticle.prix);
}

testCouponUniqueMultiArticles();
