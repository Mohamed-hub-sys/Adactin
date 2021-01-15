package com.adactin.helper;

import org.openqa.selenium.WebDriver;

import com.adactin.pom.BookHotelPage;
import com.adactin.pom.HomePage;
import com.adactin.pom.SearchHotelPage;
import com.adactin.pom.SelectHotelPage;

public class PageObjectManager {

	public static WebDriver driver;

	private HomePage hp;
	private SearchHotelPage sc;
	private SelectHotelPage sl;
	private BookHotelPage bh;

	public PageObjectManager(WebDriver ldriver) {
		this.driver = ldriver;
	}

	public HomePage getHp() {
		return hp;
	}

	public SearchHotelPage getSc() {
		return sc;
	}

	public SelectHotelPage getSl() {
		return sl;
	}

	public BookHotelPage getBh() {
		return bh;
	}

}
