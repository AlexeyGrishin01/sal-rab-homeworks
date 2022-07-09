function sendRequest(name, phone, address, goods, sum) {                          
                                                                                 
  let data = {data: {client: "", goods: [], order: {}}};   
    
    data.client =  `${name} " " ${phone}`;
    data.order = {address: `${address}`, sum: sum};

    let countOfGoods = goods.length;                          
                                                                   
    for (let i = 0; i < countOfGoods; i += 1) {                        
        data.goods = [
            {
                title: goods[i].title,
                count: goods[i].count
            }
        ];

        data.goods.push(goods[i].title, goods[i].count);                           
        
    };                                                                    
    
    let jsonData = JSON.stringify({data});                   
                                                           
    return jsonData;                                        
}                                                        


                    
                                                                            
                                                                     
                                                                                    
                                                                        
                                            
                                                                    
                                                                        
                                                                          
                                                                    
                                                                    
                                                                        
                                                                         
                                                                 
                                                                
                                                                 
                                                                 
                                                                         
                                                                 