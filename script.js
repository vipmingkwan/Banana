const products = {
    1: {
        name: "ป้าย PP Board",
        detail:`
        ✅ น้ำหนักเบา เคลื่อนย้ายง่าย

        ✅ พื้นผิวเรียบเนียน พิมพ์สีได้คมชัด

        ✅ กันน้ำ ไม่บวมเมื่อโดนน้ำ

        ✅ ตัด เจาะ ดัด ขึ้นรูปได้ง่าย

        ✅ ราคาประหยัด เหมาะกับงานทั่วไป

        ✅ ไม่เป็นสนิม ไม่ผุกร่อน

        ✅ เหมาะสำหรับใช้งานภายในและชั่วคราวภายนอก

        `,
        image: "images/ป้าย PP Board.jpg"
    },
    2: {
        name: "ป้ายสติ๊กเกอร์ PVC",
        detail:`
        ✅ พื้นผิวเรียบหรือมัน พิมพ์สีสด

        ✅ กันน้ำ กันความชื้น

        ✅ มีแผ่นกาวในตัว ติดตั้งง่าย

        ✅ ยึดเกาะได้ดีกับพื้นผิวเรียบ เช่น กระจก โลหะ พลาสติก

        ✅ ทนแดดระดับหนึ่ง สีไม่ซีดง่าย

        ✅ ทำความสะอาดง่าย

        ✅ สามารถลอกออกได้
        
        `,
        image: "images/ป้ายสติ๊กเกอร์ PVC.jpg"
    },
    3: {
        name: "ป้ายไวนิล",
        detail:`
        ✅ กันน้ำ 100% ใช้งานกลางแจ้งได้ดี

        ✅ ทนแดด ทนฝน อายุการใช้งานยาว

        ✅ เหนียว ไม่ขาดง่าย

        ✅ น้ำหนักเบา ม้วนเก็บได้

        ✅ พิมพ์ขนาดใหญ่ได้

        ✅ ราคาไม่สูงเมื่อเทียบกับขนาด

        ✅ สามารถเจาะตาไก่สำหรับแขวนได้
        
        `,
        image: "images/ป้ายไวนิล.jpg"
    },
    4: {
        name: "ป้ายอะคริลิค",
        detail:`
        ✅ พื้นผิวเรียบมัน ดูหรูหรา

        ✅ โปร่งแสงหรือทึบแสงได้ตามชนิด

        ✅ แข็งแรง ทนแรงกระแทกดีกว่ากระจก

        ✅ กันน้ำและความชื้น

        ✅ ทำความสะอาดง่าย

        ✅ ตัดเลเซอร์ แกะสลัก ดัดโค้งได้

        ✅ อายุการใช้งานยาว สีไม่เหลืองง่าย
        
        `,
        image: "images/ป้ายอะคริลิค.jpg"
    },
};

function goProduct(id) {
    localStorage.setItem("productId", id);
    window.location.href = "product.html";
}

function goBack() {
    window.location.href = "index.html";
}

window.onload = function () {
    const id = localStorage.getItem("productId");
    if (id && document.getElementById("productName")) {
        const product = products[id];
        document.getElementById("productName").innerText = product.name;
        document.getElementById("productDetail").innerText = product.detail;
        document.getElementById("productImage").src = product.image;
    }
};
