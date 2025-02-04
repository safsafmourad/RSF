document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('تم إضافة المنتج إلى سلة التسوق!');
        });
    });
});
``` ### 1. ملف `index.html`

```html
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>متجر الأكسسوارات - الجزائر</title>
</head>
<body>
    <header>
        <h1>متجر الأكسسوارات</h1>
        <nav>
            <ul>
                <li><a href="index.html">الرئيسية</a></li>
                <li><a href="products.html">المنتجات</a></li>
                <li><a href="contact.html">اتصل بنا</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>مرحبًا بكم في متجر الأكسسوارات!</h2>
        <p>استعرض مجموعتنا الواسعة من الأكسسوارات بأسعار تنافسية بالدينار الجزائري (DA).</p>
        <section class="featured-products">
            <h3>المنتجات المميزة</h3>
            <div class="product">
                <img src="accessory1.jpg" alt="إكسسوار 1">
                <h4>إكسسوار 1</h4>
                <p>وصف قصير للإكسسوار 1.</p>
                <p class="price">السعر: 1000 DA</p>
                <button class="buy-button">شراء الآن</button>
            </div>
            <div class="product">
                <img src="accessory2.jpg" alt="إكسسوار 2">
                <h4>إكسسوار 2</h4>
                <p>وصف قصير للإكسسوار 2.</p>
                <p class="price">السعر: 1500 DA</p>
                <button class="buy-button">شراء الآن</button>
            </div>
            <div class="product">
                <img src="accessory3.jpg" alt="إكسسوار 3">
                <h4>إكسسوار 3</h4>
                <p>وصف قصير للإكسسوار 3.</p>
                <p class="price">السعر: 2000 DA</p>
                <button class="buy-button">شراء الآن</button>
            </div>
        </section>
    </main>
    <footer>
        <p>حقوق الطبع والنشر &copy; 2023 متجر الأكسسوارات. جميع الحقوق محفوظة.</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>