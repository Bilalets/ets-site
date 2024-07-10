"use client";
export interface City {
  name: string;
  province: string;
}

const cities: City[] = [
  { name: "Abbottabad", province: "Khyber Pakhtunkhwa" },
  { name: "Attock", province: "Punjab" },
  { name: "Bahawalpur", province: "Punjab" },
  { name: "Bannu", province: "Khyber Pakhtunkhwa" },
  { name: "Chakwal", province: "Punjab" },
  { name: "Charsadda", province: "Khyber Pakhtunkhwa" },
  { name: "Dera Ghazi Khan", province: "Punjab" },
  { name: "Faisalabad", province: "Punjab" },
  { name: "Gujranwala", province: "Punjab" },
  { name: "Gujrat", province: "Punjab" },
  { name: "Hyderabad", province: "Sindh" },
  { name: "Islamabad", province: "Islamabad Capital Territory" },
  { name: "Jhang", province: "Punjab" },
  { name: "Karachi", province: "Sindh" },
  { name: "Kasur", province: "Punjab" },
  { name: "Lahore", province: "Punjab" },
  { name: "Larkana", province: "Sindh" },
  { name: "Mardan", province: "Khyber Pakhtunkhwa" },
  { name: "Multan", province: "Punjab" },
  { name: "Murree", province: "Punjab" },
  { name: "Nawabshah", province: "Sindh" },
  { name: "Peshawar", province: "Khyber Pakhtunkhwa" },
  { name: "Quetta", province: "Balochistan" },
  { name: "Rahim Yar Khan", province: "Punjab" },
  { name: "Rawalpindi", province: "Punjab" },
  { name: "Sargodha", province: "Punjab" },
  { name: "Sialkot", province: "Punjab" },
  { name: "Sukkur", province: "Sindh" },
  { name: "Swat", province: "Khyber Pakhtunkhwa" },
  { name: "Toba Tek Singh", province: "Punjab" },
  { name: "Zhob", province: "Balochistan" },
  { name: "Muzaffarabad", province: "Azad Jammu and Kashmir" },
  { name: "Mirpur", province: "Azad Jammu and Kashmir" },
  { name: "Skardu", province: "Gilgit-Baltistan" },
  { name: "Gilgit", province: "Gilgit-Baltistan" },
  { name: "Chitral", province: "Khyber Pakhtunkhwa" },
  { name: "Kohat", province: "Khyber Pakhtunkhwa" },
  { name: "Hunza", province: "Gilgit-Baltistan" },
  { name: "Khuzdar", province: "Balochistan" },
  { name: "Saidu Sharif", province: "Khyber Pakhtunkhwa" },
  { name: "Dera Ismail Khan", province: "Khyber Pakhtunkhwa" },
  { name: "Sibi", province: "Balochistan" },
  { name: "Jacobabad", province: "Sindh" },
  { name: "Khanewal", province: "Punjab" },
  { name: "Loralai", province: "Balochistan" },
  { name: "Karak", province: "Khyber Pakhtunkhwa" },
  { name: "Jhelum", province: "Punjab" },
  { name: "Okara", province: "Punjab" },
  { name: "Haripur", province: "Khyber Pakhtunkhwa" },
  { name: "Nowshera", province: "Khyber Pakhtunkhwa" },
  { name: "Daska", province: "Punjab" },
  { name: "Mianwali", province: "Punjab" },
  { name: "Gojra", province: "Punjab" },
  { name: "Dadu", province: "Sindh" },
  { name: "Tando Allahyar", province: "Sindh" },
  { name: "Mingora", province: "Khyber Pakhtunkhwa" },
  { name: "Chaman", province: "Balochistan" },
  { name: "Zhob", province: "Balochistan" },
  { name: "Bhakkar", province: "Punjab" },
  { name: "Badin", province: "Sindh" },
  { name: "Layyah", province: "Punjab" },
  { name: "Kandhkot", province: "Sindh" },
  { name: "Tank", province: "Khyber Pakhtunkhwa" },
  { name: "Hafizabad", province: "Punjab" },
  { name: "Lodhran", province: "Punjab" },
  { name: "Malakand", province: "Khyber Pakhtunkhwa" },
  { name: "Upper Dir", province: "Khyber Pakhtunkhwa" },
  { name: "Buner", province: "Khyber Pakhtunkhwa" },
  { name: "Timergara", province: "Khyber Pakhtunkhwa" },
  { name: "Gwadar", province: "Balochistan" },
  { name: "Turbat", province: "Balochistan" },
  { name: "Pasni", province: "Balochistan" },
  { name: "Ormara", province: "Balochistan" },
  { name: "Gakuch", province: "Gilgit-Baltistan" },
  { name: "Khaplu", province: "Gilgit-Baltistan" },
  { name: "Aliabad", province: "Gilgit-Baltistan" },
  { name: "Astore", province: "Gilgit-Baltistan" },
  { name: "Skardu", province: "Gilgit-Baltistan" },
  { name: "Gulmit", province: "Gilgit-Baltistan" },
  { name: "Shigar", province: "Gilgit-Baltistan" },
  { name: "Danyore", province: "Gilgit-Baltistan" },
  { name: "Hunza", province: "Gilgit-Baltistan" },
  { name: "Nagar", province: "Gilgit-Baltistan" },
  { name: "Gahkuch", province: "Gilgit-Baltistan" },
  { name: "Chilas", province: "Gilgit-Baltistan" },
  { name: "Kharmang", province: "Gilgit-Baltistan" },
  { name: "Ghizer", province: "Gilgit-Baltistan" },
  { name: "Shangla", province: "Khyber Pakhtunkhwa" },
  { name: "Batagram", province: "Khyber Pakhtunkhwa" },
  { name: "Karak", province: "Khyber Pakhtunkhwa" },
  { name: "Chitral", province: "Khyber Pakhtunkhwa" },
  { name: "Bajaur", province: "Khyber Pakhtunkhwa" },
  { name: "Mohmand", province: "Khyber Pakhtunkhwa" },
  { name: "Khyber", province: "Khyber Pakhtunkhwa" },
  { name: "Kurram", province: "Khyber Pakhtunkhwa" },
  { name: "Orakzai", province: "Khyber Pakhtunkhwa" },
  { name: "North Waziristan", province: "Khyber Pakhtunkhwa" },
  { name: "South Waziristan", province: "Khyber Pakhtunkhwa" },
  { name: "Bajaur Agency", province: "Khyber Pakhtunkhwa" },
  { name: "Mohmand Agency", province: "Khyber Pakhtunkhwa" },
  { name: "Khyber Agency", province: "Khyber Pakhtunkhwa" },
  { name: "Kurram Agency", province: "Khyber Pakhtunkhwa" },
  { name: "Orakzai Agency", province: "Khyber Pakhtunkhwa" },
  { name: "North Waziristan Agency", province: "Khyber Pakhtunkhwa" },
  { name: "South Waziristan Agency", province: "Khyber Pakhtunkhwa" },
  { name: "Peshawar", province: "Khyber Pakhtunkhwa" },
  { name: "Kohat", province: "Khyber Pakhtunkhwa" },
  { name: "Bannu", province: "Khyber Pakhtunkhwa" },
  { name: "Lakki Marwat", province: "Khyber Pakhtunkhwa" },
  { name: "Tank", province: "Khyber Pakhtunkhwa" },
  { name: "Dera Ismail Khan", province: "Khyber Pakhtunkhwa" },
  { name: "Nowshera", province: "Khyber Pakhtunkhwa" },
  { name: "Charsadda", province: "Khyber Pakhtunkhwa" },
  { name: "Swabi", province: "Khyber Pakhtunkhwa" },
  { name: "Mardan", province: "Khyber Pakhtunkhwa" },
  { name: "Malakand", province: "Khyber Pakhtunkhwa" },
  { name: "Dir", province: "Khyber Pakhtunkhwa" },
  { name: "Chitral", province: "Khyber Pakhtunkhwa" },
  { name: "Swat", province: "Khyber Pakhtunkhwa" },
  { name: "Buner", province: "Khyber Pakhtunkhwa" },
  { name: "Shangla", province: "Khyber Pakhtunkhwa" },
  { name: "Lower Dir", province: "Khyber Pakhtunkhwa" },
  { name: "Upper Dir", province: "Khyber Pakhtunkhwa" },
  { name: "Kohistan", province: "Khyber Pakhtunkhwa" },
  { name: "Haripur", province: "Khyber Pakhtunkhwa" },
  { name: "Mansehra", province: "Khyber Pakhtunkhwa" },
  { name: "Abbottabad", province: "Khyber Pakhtunkhwa" },
  { name: "Muzaffarabad", province: "Azad Jammu and Kashmir" },
  { name: "Mirpur", province: "Azad Jammu and Kashmir" },
  { name: "Kotli", province: "Azad Jammu and Kashmir" },
  { name: "Rawalakot", province: "Azad Jammu and Kashmir" },
  { name: "Bagh", province: "Azad Jammu and Kashmir" },
  { name: "Skardu", province: "Gilgit-Baltistan" },
  { name: "Gilgit", province: "Gilgit-Baltistan" },
  { name: "Ghizer", province: "Gilgit-Baltistan" },
  { name: "Hunza", province: "Gilgit-Baltistan" },
  { name: "Gupis", province: "Gilgit-Baltistan" },
  { name: "Kharmang", province: "Gilgit-Baltistan" },
  { name: "Astore", province: "Gilgit-Baltistan" },
  { name: "Chilas", province: "Gilgit-Baltistan" },
  { name: "Shigar", province: "Gilgit-Baltistan" },
  { name: "Gakuch", province: "Gilgit-Baltistan" },
  { name: "Khaplu", province: "Gilgit-Baltistan" },
  { name: "Danyore", province: "Gilgit-Baltistan" },
  { name: "Aliabad", province: "Gilgit-Baltistan" },
  { name: "Gulmit", province: "Gilgit-Baltistan" },
  { name: "Sost", province: "Gilgit-Baltistan" },
  { name: "Parachinar", province: "Khyber Pakhtunkhwa" },
  { name: "Alpuri", province: "Khyber Pakhtunkhwa" },
  { name: "Batkhela", province: "Khyber Pakhtunkhwa" },
  { name: "Chapri", province: "Khyber Pakhtunkhwa" },
  { name: "Bahrain", province: "Khyber Pakhtunkhwa" },
  { name: "Kumrat", province: "Khyber Pakhtunkhwa" },
  { name: "Chakdara", province: "Khyber Pakhtunkhwa" },
  { name: "Kalam", province: "Khyber Pakhtunkhwa" },
  { name: "Besham", province: "Khyber Pakhtunkhwa" },
  { name: "Dasu", province: "Khyber Pakhtunkhwa" },
  { name: "Thakot", province: "Khyber Pakhtunkhwa" },
  { name: "Chillas", province: "Gilgit-Baltistan" },
  { name: "Astore", province: "Gilgit-Baltistan" },
  { name: "Naltar", province: "Gilgit-Baltistan" },
  { name: "Gulmit", province: "Gilgit-Baltistan" },
  { name: "Skardu", province: "Gilgit-Baltistan" },
  { name: "Turtuk", province: "Gilgit-Baltistan" },
  { name: "Khaplu", province: "Gilgit-Baltistan" },
  { name: "Askole", province: "Gilgit-Baltistan" },
  { name: "Gahkuch", province: "Gilgit-Baltistan" },
  { name: "Hussaini", province: "Gilgit-Baltistan" },
  { name: "Passu", province: "Gilgit-Baltistan" },
  { name: "Sust", province: "Gilgit-Baltistan" },
  { name: "Shimshal", province: "Gilgit-Baltistan" },
  { name: "Khyber Pass", province: "Khyber Pakhtunkhwa" },
  { name: "Torkham", province: "Khyber Pakhtunkhwa" },
  { name: "Landi Kotal", province: "Khyber Pakhtunkhwa" },
  { name: "Bara", province: "Khyber Pakhtunkhwa" },
  { name: "Jamrud", province: "Khyber Pakhtunkhwa" },
  { name: "Ali Masjid", province: "Khyber Pakhtunkhwa" },
  { name: "Hayatabad", province: "Khyber Pakhtunkhwa" },
  { name: "Kohat", province: "Khyber Pakhtunkhwa" },
  { name: "Dera Ismail Khan", province: "Khyber Pakhtunkhwa" },
  { name: "Bannu", province: "Khyber Pakhtunkhwa" },
  { name: "Tank", province: "Khyber Pakhtunkhwa" },
  { name: "Lakki Marwat", province: "Khyber Pakhtunkhwa" },
  { name: "Karak", province: "Khyber Pakhtunkhwa" },
  { name: "Mardan", province: "Khyber Pakhtunkhwa" },
  { name: "Swabi", province: "Khyber Pakhtunkhwa" },
  { name: "Charsadda", province: "Khyber Pakhtunkhwa" },
  { name: "Nowshera", province: "Khyber Pakhtunkhwa" },
  { name: "Shabqadar", province: "Khyber Pakhtunkhwa" },
  { name: "Dargai", province: "Khyber Pakhtunkhwa" },
  { name: "Thall", province: "Punjab" },
  { name: "Hangu", province: "Khyber Pakhtunkhwa" },
  { name: "Parachinar", province: "Khyber Pakhtunkhwa" },
  { name: "Bajaur", province: "Khyber Pakhtunkhwa" },
  { name: "Mohmand", province: "Khyber Pakhtunkhwa" },
  { name: "Kurram", province: "Khyber Pakhtunkhwa" },
  { name: "Orakzai", province: "Khyber Pakhtunkhwa" },
  { name: "North Waziristan", province: "Khyber Pakhtunkhwa" },
  { name: "South Waziristan", province: "Khyber Pakhtunkhwa" },
  { name: "Khyber Agency", province: "Khyber Pakhtunkhwa" },
  { name: "Kurram Agency", province: "Khyber Pakhtunkhwa" },
  { name: "Orakzai Agency", province: "Khyber Pakhtunkhwa" },
  { name: "Mohmand Agency", province: "Khyber Pakhtunkhwa" },
  { name: "Bajaur Agency", province: "Khyber Pakhtunkhwa" },
  { name: "North Waziristan Agency", province: "Khyber Pakhtunkhwa" },
  { name: "South Waziristan Agency", province: "Khyber Pakhtunkhwa" },
  { name: "Chagai", province: "Balochistan" },
  { name: "Kharan", province: "Balochistan" },
  { name: "Panjgur", province: "Balochistan" },
  { name: "Turbat", province: "Balochistan" },
  { name: "Gwadar", province: "Balochistan" },
  { name: "Pasni", province: "Balochistan" },
  { name: "Ormara", province: "Balochistan" },
  { name: "Nushki", province: "Balochistan" },
  { name: "Dalbandin", province: "Balochistan" },
  { name: "Mastung", province: "Balochistan" },
  { name: "Kalat", province: "Balochistan" },
  { name: "Khuzdar", province: "Balochistan" },
  { name: "Chaman", province: "Balochistan" },
  { name: "Qila Saifullah", province: "Balochistan" },
  { name: "Ziarat", province: "Balochistan" },
  { name: "Pishin", province: "Balochistan" },
  { name: "Loralai", province: "Balochistan" },
  { name: "Barkhan", province: "Balochistan" },
  { name: "Musakhel", province: "Balochistan" },
  { name: "Killa Abdullah", province: "Balochistan" },
  { name: "Killa Saifullah", province: "Balochistan" },
  { name: "Zhob", province: "Balochistan" },
  { name: "Sherani", province: "Balochistan" },
  { name: "Harnai", province: "Balochistan" },
  { name: "Sibi", province: "Balochistan" },
  { name: "Dera Bugti", province: "Balochistan" },
  { name: "Kohlu", province: "Balochistan" },
  { name: "Bolan", province: "Balochistan" },
  { name: "Duki", province: "Balochistan" },
  { name: "Mach", province: "Balochistan" },
  { name: "Gandava", province: "Balochistan" },
  { name: "Jhal Magsi", province: "Balochistan" },
  { name: "Soiankoh", province: "Punjab" },
  { name: "Tandlianwala", province: "Punjab" },
  { name: "Dipalpur", province: "Punjab" },
  { name: "Pir Mahal", province: "Punjab" },
  { name: "Haveli Lakha", province: "Punjab" },
  { name: "Liaquat Pur", province: "Punjab" },
  { name: "Chak Jhumra", province: "Punjab" },
  { name: "Rabwah", province: "Punjab" },
  { name: "Toba Tek Singh", province: "Punjab" },
  { name: "Jaranwala", province: "Punjab" },
  { name: "Raiwind", province: "Punjab" },
  { name: "Ahmadpur East", province: "Punjab" },
  { name: "Kot Addu", province: "Punjab" },
  { name: "Jampur", province: "Punjab" },
  { name: "Kahror Pakka", province: "Punjab" },
  { name: "Kot Mithan", province: "Punjab" },
  { name: "Kot Radha Kishan", province: "Punjab" },
  { name: "Kamalia", province: "Punjab" },
  { name: "Khanpur", province: "Punjab" },
  { name: "Gojra", province: "Punjab" },
  { name: "Kabirwala", province: "Punjab" },
  { name: "Mian Channu", province: "Punjab" },
  { name: "Kot Sultan", province: "Punjab" },
  { name: "Lodhran", province: "Punjab" },
  { name: "Dunyapur", province: "Punjab" },
  { name: "Pattoki", province: "Punjab" },
  { name: "Chichawatni", province: "Punjab" },
  { name: "Vehari", province: "Punjab" },
  { name: "Burewala", province: "Punjab" },
  { name: "Hasilpur", province: "Punjab" },
  { name: "Shujaabad", province: "Punjab" },
  { name: "Tulamba", province: "Punjab" },
  { name: "Layyah", province: "Punjab" },
  { name: "Taunsa Sharif", province: "Punjab" },
  { name: "Fort Abbas", province: "Punjab" },
  { name: "Dera Ghazi Khan", province: "Punjab" },
  { name: "Rajanpur", province: "Punjab" },
  { name: "Kotli Loharan", province: "Punjab" },
  { name: "Shakargarh", province: "Punjab" },
  { name: "Narowal", province: "Punjab" },
  { name: "Begowala", province: "Punjab" },
  { name: "Zafarwal", province: "Punjab" },
  { name: "Pasrur", province: "Punjab" },
  { name: "Shakargarh", province: "Punjab" },
  { name: "Kamoke", province: "Punjab" },
  { name: "Muridke", province: "Punjab" },
  { name: "Kharian", province: "Punjab" },
  { name: "Wazirabad", province: "Punjab" },
  { name: "Hafizabad", province: "Punjab" },
  { name: "Sambrial", province: "Punjab" },
  { name: "Pasrur", province: "Punjab" },
  { name: "Surkhpur", province: "Punjab" },
  { name: "Bhalwal", province: "Punjab" },
  { name: "Sillanwali", province: "Punjab" },
  { name: "Jalalpur Jattan", province: "Punjab" },
  { name: "Badiana", province: "Punjab" },
  { name: "Hajipur", province: "Punjab" },
  { name: "Khushab", province: "Punjab" },
  { name: "Noorpur Thal", province: "Punjab" },
  { name: "Jauharabad", province: "Punjab" },
  { name: "Shahpur", province: "Punjab" },
  { name: "Mianwali", province: "Punjab" },
  { name: "Kamar Mushani", province: "Punjab" },
  { name: "Piplan", province: "Punjab" },
  { name: "Kot Adu", province: "Punjab" },
  { name: "Lalian", province: "Punjab" },
  { name: "Chiniot", province: "Punjab" },
  { name: "Mandi Bahauddin", province: "Punjab" },
  { name: "Dinga", province: "Punjab" },
  { name: "Malakwal", province: "Punjab" },
  { name: "Phalia", province: "Punjab" },
  { name: "Sarai Alamgir", province: "Punjab" },
  { name: "Chakwal", province: "Punjab" },
  { name: "Talagang", province: "Punjab" },
  { name: "Kallar Kahar", province: "Punjab" },
  { name: "Lawrencepur", province: "Punjab" },
  { name: "Tatlay Aali", province: "Punjab" },
  { name: "Khewra", province: "Punjab" },
  { name: "Kot Diji", province: "Sindh" },
  { name: "Khairpur", province: "Sindh" },
  { name: "Gambat", province: "Sindh" },
  { name: "Nawabshah", province: "Sindh" },
  { name: "Hyderabad", province: "Sindh" },
  { name: "Tando Allahyar", province: "Sindh" },
  { name: "Mirpur Khas", province: "Sindh" },
  { name: "Umerkot", province: "Sindh" },
  { name: "Badin", province: "Sindh" },
  { name: "Thatta", province: "Sindh" },
  { name: "Sujawal", province: "Sindh" },
  { name: "Tando Muhammad Khan", province: "Sindh" },
  { name: "Matli", province: "Sindh" },
  { name: "Kotri", province: "Sindh" },
  { name: "Jamshoro", province: "Sindh" },
  { name: "Dadu", province: "Sindh" },
  { name: "Meerwah", province: "Sindh" },
  { name: "Sakrand", province: "Sindh" },
  { name: "Khadro", province: "Sindh" },
  { name: "Moro", province: "Sindh" },
  { name: "Bhiria City", province: "Sindh" },
  { name: "Sehwan Sharif", province: "Sindh" },
  { name: "Larkana", province: "Sindh" },
  { name: "Ratodero", province: "Sindh" },
  { name: "Shikarpur", province: "Sindh" },
  { name: "Jacobabad", province: "Sindh" },
  { name: "Daharki", province: "Sindh" },
  { name: "Ghotki", province: "Sindh" },
  { name: "Kandhkot", province: "Sindh" },
  { name: "Kashmore", province: "Sindh" },
  { name: "Sukkur", province: "Sindh" },
  { name: "Rohri", province: "Sindh" },
  { name: "Shahdadkot", province: "Sindh" },
  { name: "Khuzdar", province: "Balochistan" },
  { name: "Nushki", province: "Balochistan" },
  { name: "Mastung", province: "Balochistan" },
  { name: "Chaman", province: "Balochistan" },
  { name: "Qilla Abdullah", province: "Balochistan" },
  { name: "Zhob", province: "Balochistan" },
  { name: "Loralai", province: "Balochistan" },
  { name: "Dera Murad Jamali", province: "Balochistan" },
  { name: "Gwadar", province: "Balochistan" },
  { name: "Pasni", province: "Balochistan" },
  { name: "Panjgur", province: "Balochistan" },
  { name: "Kharan", province: "Balochistan" },
  { name: "Turbat", province: "Balochistan" },
  { name: "Hub", province: "Balochistan" },
  { name: "Khuzdar", province: "Balochistan" },
  { name: "Uthal", province: "Balochistan" },
  { name: "Sibi", province: "Balochistan" },
  { name: "Naseerabad", province: "Balochistan" },
  { name: "Chaghi", province: "Balochistan" },
  { name: "Taftan", province: "Balochistan" },
  { name: "Jiwani", province: "Balochistan" },
  { name: "Dalbandin", province: "Balochistan" },
  { name: "Pishin", province: "Balochistan" },
  { name: "Ziarat", province: "Balochistan" },
  { name: "Muslim Bagh", province: "Balochistan" },
  { name: "Duki", province: "Balochistan" },
  { name: "Harnai", province: "Balochistan" },
  { name: "Mach", province: "Balochistan" },
  { name: "Dhadar", province: "Balochistan" },
  { name: "Mastung", province: "Balochistan" },
  { name: "Loralai", province: "Balochistan" },
  { name: "Barkhan", province: "Balochistan" },
  { name: "Musakhel", province: "Balochistan" },
  { name: "Killa Saifullah", province: "Balochistan" },
  { name: "Zhob", province: "Balochistan" },
  { name: "Sherani", province: "Balochistan" },
  { name: "Harnai", province: "Balochistan" },
  { name: "Sibi", province: "Balochistan" },
  { name: "Ziarat", province: "Balochistan" },
  { name: "Pishin", province: "Balochistan" },
  { name: "Loralai", province: "Balochistan" },
  { name: "Barkhan", province: "Balochistan" },
  { name: "Kohlu", province: "Balochistan" },
  { name: "Dera Bugti", province: "Balochistan" },
  { name: "Chaman", province: "Balochistan" },
  { name: "Kharan", province: "Balochistan" },
  { name: "Qila Saifullah", province: "Balochistan" },
  { name: "Nushki", province: "Balochistan" },
  { name: "Dalbandin", province: "Balochistan" },
  { name: "Mastung", province: "Balochistan" },
  { name: "Kharan", province: "Balochistan" },
  { name: "Panjgur", province: "Balochistan" },
  { name: "Hub", province: "Balochistan" },
  { name: "Khuzdar", province: "Balochistan" },
  { name: "Uthal", province: "Balochistan" },
  { name: "Mand", province: "Balochistan" },
  { name: "Sibi", province: "Balochistan" },
  { name: "Dera Murad Jamali", province: "Balochistan" },
  { name: "Barkhan", province: "Balochistan" },
  { name: "Zhob", province: "Balochistan" },
  { name: "Chagai", province: "Balochistan" },
  { name: "Ziarat", province: "Balochistan" },
  { name: "Wadh", province: "Balochistan" },
  { name: "Awaran", province: "Balochistan" },
  { name: "Kalat", province: "Balochistan" },
  { name: "Khuzdar", province: "Balochistan" },
  { name: "Khuzdar", province: "Balochistan" },
  { name: "Gwadar", province: "Balochistan" },
  { name: "Kech", province: "Balochistan" },
  { name: "Pishin", province: "Balochistan" },
  { name: "Jiwani", province: "Balochistan" },
  { name: "Makran", province: "Balochistan" },
  { name: "Panjgur", province: "Balochistan" },
  { name: "Kharan", province: "Balochistan" },
  { name: "Dera Bugti", province: "Balochistan" },
  { name: "Kohlu", province: "Balochistan" },
  { name: "Chagai", province: "Balochistan" },
  { name: "Sui", province: "Balochistan" },
  { name: "Jiwani", province: "Balochistan" },
  { name: "Pasni", province: "Balochistan" },
  { name: "Ormara", province: "Balochistan" },
  { name: "Gwadar", province: "Balochistan" },
  { name: "Makran", province: "Balochistan" },
  { name: "Jiwani", province: "Balochistan" },
  { name: "Hub", province: "Balochistan" },
  { name: "Kund Malir", province: "Balochistan" },
  { name: "Kundkot", province: "Sindh" },
  { name: "Dadu", province: "Sindh" },
  { name: "Johi", province: "Sindh" },
  { name: "Larkana", province: "Sindh" },
  { name: "Dokri", province: "Sindh" },
  { name: "Mehar", province: "Sindh" },
  { name: "Rato Dero", province: "Sindh" },
  { name: "Bhiria City", province: "Sindh" },
  { name: "Shaheed Benazirabad", province: "Sindh" },
  { name: "Nawabshah", province: "Sindh" },
  { name: "Qazi Ahmed", province: "Sindh" },
  { name: "Daur", province: "Sindh" },
  { name: "Morro", province: "Sindh" },
  { name: "Kandiaro", province: "Sindh" },
  { name: "Kashmore", province: "Sindh" },
  { name: "Kandhkot", province: "Sindh" },
  { name: "Rustam", province: "Sindh" },
  { name: "Ghari Khairo", province: "Sindh" },
  { name: "Larkana", province: "Sindh" },
  { name: "Rato Dero", province: "Sindh" },
  { name: "Shikarpur", province: "Sindh" },
  { name: "Garhi Yasin", province: "Sindh" },
  { name: "Sukkur", province: "Sindh" },
  { name: "Rohri", province: "Sindh" },
  { name: "Saleh Pat", province: "Sindh" },
  { name: "Pano Aqil", province: "Sindh" },
  { name: "Khanpur", province: "Sindh" },
  { name: "Sobhodero", province: "Sindh" },
  { name: "Nawabshah", province: "Sindh" },
  { name: "Shahdadpur", province: "Sindh" },
  { name: "Daur", province: "Sindh" },
  { name: "Morro", province: "Sindh" },
  { name: "Sanghar", province: "Sindh" },
  { name: "Tando Adam", province: "Sindh" },
  { name: "Khipro", province: "Sindh" },
  { name: "Shahpur Chakar", province: "Sindh" },
  { name: "Jam Nawaz Ali", province: "Sindh" },
  { name: "Tando Allahyar", province: "Sindh" },
  { name: "Jhudo", province: "Sindh" },
  { name: "Matiari", province: "Sindh" },
  { name: "Sakrand", province: "Sindh" },
  { name: "Tando Muhammad Khan", province: "Sindh" },
  { name: "Tando Ghulam Ali", province: "Sindh" },
  { name: "Hyderabad", province: "Sindh" },
  { name: "Matli", province: "Sindh" },
  { name: "Badin", province: "Sindh" },
  { name: "Tando Bago", province: "Sindh" },
  { name: "Chohar Jamali", province: "Sindh" },
  { name: "Thatta", province: "Sindh" },
  { name: "Ghorabari", province: "Sindh" },
  { name: "Mirpur Sakro", province: "Sindh" },
  { name: "Jati", province: "Sindh" },
  { name: "Sujawal", province: "Sindh" },
  { name: "Keti Bandar", province: "Sindh" },
  { name: "Ghagar Phatak", province: "Sindh" },
  { name: "Kotri", province: "Sindh" },
  { name: "Jamshoro", province: "Sindh" },
  { name: "Hatri Bypass", province: "Sindh" },
  { name: "Nooriabad", province: "Sindh" },
  { name: "Thano Bula Khan", province: "Sindh" },
  { name: "Dadu", province: "Sindh" },
  { name: "Johi", province: "Sindh" },
  { name: "Mehar", province: "Sindh" },
  { name: "K.N. Shah", province: "Sindh" },
  { name: "Moro", province: "Sindh" },
  { name: "Naushero Feroze", province: "Sindh" },
  { name: "Bhiria City", province: "Sindh" },
  { name: "Daur", province: "Sindh" },
  { name: "Sakrand", province: "Sindh" },
  { name: "Moro", province: "Sindh" },
  { name: "Bhiria City", province: "Sindh" },
  { name: "Nawabshah", province: "Sindh" },
  { name: "Dadu", province: "Sindh" },
  { name: "Larkana", province: "Sindh" },
  { name: "Shikarpur", province: "Sindh" },
  { name: "Jacobabad", province: "Sindh" },
  { name: "Kashmore", province: "Sindh" },
  { name: "Kandhkot", province: "Sindh" },
  { name: "Sukkur", province: "Sindh" },
  { name: "Rohri", province: "Sindh" },
  { name: "Saleh Pat", province: "Sindh" },
  { name: "Pano Aqil", province: "Sindh" },
  { name: "Khairpur", province: "Sindh" },
  { name: "Gambat", province: "Sindh" },
  { name: "Ranipur", province: "Sindh" },
  { name: "Sobhodero", province: "Sindh" },
  { name: "Naudero", province: "Sindh" },
  { name: "Daharki", province: "Sindh" },
  { name: "Ghotki", province: "Sindh" },
  { name: "Mirpur Mathelo", province: "Sindh" },
  { name: "Ubauro", province: "Sindh" },
  { name: "Thul", province: "Sindh" },
  { name: "Darya Khan", province: "Punjab" },
  { name: "Jalalpur", province: "Punjab" },
  { name: "Balloki", province: "Punjab" },
  { name: "Chiniot", province: "Punjab" },
  { name: "Faisalabad", province: "Punjab" },
  { name: "Gujranwala", province: "Punjab" },
  { name: "Gujrat", province: "Punjab" },
  { name: "Hafizabad", province: "Punjab" },
  { name: "Jhang", province: "Punjab" },
  { name: "Jhelum", province: "Punjab" },
  { name: "Kasur", province: "Punjab" },
  { name: "Kharian", province: "Punjab" },
  { name: "Lahore", province: "Punjab" },
  { name: "Mandi Bahauddin", province: "Punjab" },
  { name: "Mianwali", province: "Punjab" },
  { name: "Multan", province: "Punjab" },
  { name: "Murree", province: "Punjab" },
  { name: "Nankana Sahib", province: "Punjab" },
  { name: "Narowal", province: "Punjab" },
  { name: "Okara", province: "Punjab" },
  { name: "Pakpattan", province: "Punjab" },
  { name: "Rahim Yar Khan", province: "Punjab" },
  { name: "Rawalpindi", province: "Punjab" },
  { name: "Sadiqabad", province: "Punjab" },
  { name: "Sahiwal", province: "Punjab" },
  { name: "Sargodha", province: "Punjab" },
  { name: "Sheikhupura", province: "Punjab" },
  { name: "Sialkot", province: "Punjab" },
  { name: "Toba Tek Singh", province: "Punjab" },
  { name: "Vehari", province: "Punjab" },
  { name: "Wah Cantonment", province: "Punjab" },
  { name: "Attock", province: "Punjab" },
  { name: "Bahawalnagar", province: "Punjab" },
  { name: "Bahawalpur", province: "Punjab" },
  { name: "Bhakkar", province: "Punjab" },
  { name: "Chakwal", province: "Punjab" },
  { name: "Chishtian", province: "Punjab" },
  { name: "Dera Ghazi Khan", province: "Punjab" },
  { name: "Ferozewala", province: "Punjab" },
  { name: "Haroonabad", province: "Punjab" },
  { name: "Hasilpur", province: "Punjab" },
  { name: "Jampur", province: "Punjab" },
  { name: "Khanewal", province: "Punjab" },
  { name: "Khanpur", province: "Punjab" },
  { name: "Kot Addu", province: "Punjab" },
  { name: "Layyah", province: "Punjab" },
  { name: "Lodhran", province: "Punjab" },
  { name: "Malakwal", province: "Punjab" },
  { name: "Mamukanjan", province: "Punjab" },
  { name: "Mian Channu", province: "Punjab" },
  { name: "Mianwali", province: "Punjab" },
  { name: "Mianwali Bangla", province: "Punjab" },
  { name: "Mandi Bahauddin", province: "Punjab" },
  { name: "Mailsi", province: "Punjab" },
  { name: "Mian Channu", province: "Punjab" },
  { name: "Mianwali", province: "Punjab" },
  { name: "Multan", province: "Punjab" },
  { name: "Murree", province: "Punjab" },
  { name: "Muridke", province: "Punjab" },
  { name: "Muzaffargarh", province: "Punjab" },
  { name: "Narowal", province: "Punjab" },
  { name: "Okara", province: "Punjab" },
  { name: "Renala Khurd", province: "Punjab" },
  { name: "Pakpattan", province: "Punjab" },
  { name: "Pir Mahal", province: "Punjab" },
  { name: "Qaimpur", province: "Punjab" },
  { name: "Qila Didar Singh", province: "Punjab" },
  { name: "Raiwind", province: "Punjab" },
  { name: "Rajanpur", province: "Punjab" },
  { name: "Sadiqabad", province: "Punjab" },
  { name: "Safdarabad", province: "Punjab" },
  { name: "Sahiwal", province: "Punjab" },
  { name: "Sambrial", province: "Punjab" },
  { name: "Samundri", province: "Punjab" },
  { name: "Sangla Hill", province: "Punjab" },
  { name: "Sarai Alamgir", province: "Punjab" },
  { name: "Sargodha", province: "Punjab" },
  { name: "Shakargarh", province: "Punjab" },
  { name: "Sheikhupura", province: "Punjab" },
  { name: "Sialkot", province: "Punjab" },
  { name: "Sohawa", province: "Punjab" },
  { name: "Soianwala", province: "Punjab" },
  { name: "Talagang", province: "Punjab" },
  { name: "Taxila", province: "Punjab" },
  { name: "Toba Tek Singh", province: "Punjab" },
  { name: "Vehari", province: "Punjab" },
  { name: "Wah Cantonment", province: "Punjab" },
  { name: "Wazirabad", province: "Punjab" },
  { name: "Mianwali", province: "Punjab" },
  { name: "Gujrat", province: "Punjab" },
  { name: "Islamabad", province: "Islamabad Capital Territory" },
  { name: "Karachi", province: "Sindh" },
  { name: "Lahore", province: "Punjab" },
  { name: "Multan", province: "Punjab" },
  { name: "Peshawar", province: "Khyber Pakhtunkhwa" },
  { name: "Quetta", province: "Balochistan" },
  { name: "Rawalpindi", province: "Punjab" },
  { name: "Sargodha", province: "Punjab" },
  { name: "Faisalabad", province: "Punjab" },
  { name: "Gujranwala", province: "Punjab" },
  { name: "Islamabad", province: "Islamabad Capital Territory" }
];

  export default cities;
  