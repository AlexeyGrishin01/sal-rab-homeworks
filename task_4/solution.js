// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    
    let data = JSON.parse(json);        // Аргументом функции является JSON
                                        // Преобразуйте строку json, переданную как аргумент функции,
    return data.products;               // в объект с помощью функции JSON.parse(json)
                                        // и запишите в переменную data
}                                       // Верните как результат функции свойство products объекта data


function renderProductsCards(json) {    // Напишите функцию renderProductsCards(json)
                                        // Аргументом функции является JSON
    clearProducts();                    // Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
                                        // Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат
    let products = parseProducts(json); // в переменную products
    let length = products.length;       // Запишите в переменную length значение свойства products.length
                                        // Напишите цикл, в котором перебираете все products от 0 до (length - 1)
    for (i = 0; i < length; i++ ) {     // и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)

        addProduct(products[i]);                                
                                        
    }                                    

}                                        






