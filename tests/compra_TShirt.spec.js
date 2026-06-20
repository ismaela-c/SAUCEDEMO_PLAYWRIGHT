import {test, expect} from '@playwright/test'

test ('Fluxo de compra - T Shirt', async({page}) =>{
    await page.goto('https://www.saucedemo.com/')
   
    //Verificações para pág. do Login
    await expect(page).toHaveURL(/saucedemo\.com/)
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    //Verificações para a pág. dos produtos e entrar no produto Sauce Labs Backpack
    await expect(page.locator('[data-test="title"]')).toHaveText('Products')
    await page.locator('[data-test="item-1-title-link"]').click()

    //Verficações dentro da pág do produto
    await expect(page.locator('.inventory_details_name.large_size')).toHaveText('Sauce Labs Bolt T-Shirt')
    await expect(page.locator('.inventory_details_price')). toHaveText('$15.99')
    await page.locator('.btn_inventory').click()
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1')
    await page.locator('.shopping_cart_link').click()

    //Verficações dentro da pág do carrinho
    await expect(page.locator('.title')).toHaveText('Your Cart')
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Bolt T-Shirt')
    await expect(page.locator('.inventory_item_price')). toHaveText('$15.99')
    await page.locator('.checkout_button').click()


})