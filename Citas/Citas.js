
int value= document.getElementByClassName('selec');
String  doctor1="";
String  horario="";
 switch( value){
 	case 1: doctor1= document.write("Dr. Juan Martinez");
 			horario= document.write("Lun-Mier-Vier: 8:30am - 12m");
 			break;
 	case 2: doctor1= document.write("Dra. Alejandra Alcocer");
 			horario=document.write("Mar-Mier-Jue: 11am - 4pm");
 			break;
 	case 3:doctor1= document.write("Dr. Alonso Gutierrez");
 			horario=document.write("Mar-Jue-Sab: 9am - 5pm");
 			break;
 	case 4:doctor1= document.write("Dr");
 			horario=document.write("Mar-Mier-Jueves: 11am - 4pm");
 			break;
 	case 5:doctor1= document.write("Dra. Alejandra Alcocer");
 			horario=document.write("Mar-Mier-Jueves: 11am - 4pm");
 			break;
 	case 6:doctor1= document.write("Dra. Alejandra Alcocer");
 			horario=document.write("Mar-Mier-Jueves: 11am - 4pm");
 			break;
 }