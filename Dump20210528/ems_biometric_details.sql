-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: ems
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `biometric_details`
--

DROP TABLE IF EXISTS `biometric_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `biometric_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(45) DEFAULT NULL,
  `cand_name` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `Filename` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biometric_details`
--

LOCK TABLES `biometric_details` WRITE;
/*!40000 ALTER TABLE `biometric_details` DISABLE KEYS */;
INSERT INTO `biometric_details` VALUES (1,'Ashi237304','Ashian','Photo','1622189439206account.png'),(2,'Ashi237304','Ashian','Sign','1622189439209account.gif'),(3,'Ashi237304','Ashian','Thumb','1622189439230assitant.png'),(4,'Ashi686950','Ashian','Photo','1622189714205account.png'),(5,'Ashi686950','Ashian','Thumb','1622189714237assitant.png'),(6,'Ashi686950','Ashian','Sign','1622189714210account.gif'),(7,'kavy101085','kavya','Photo','1622189747222account.png'),(8,'kavy101085','kavya','Sign','1622189747226book.png'),(9,'kavy101085','kavya','Thumb','1622189747227assitant.png'),(10,'fan308747','fan','Photo','1622190994698assitant.png'),(11,'fan308747','fan','Sign','1622190994715admission.png'),(12,'fan308747','fan','Thumb','1622190994718book.png'),(13,'roob659625','rooba','Photo','1622193084630footer.ejs'),(14,'roob659625','rooba','Sign','1622193084636arts.png'),(15,'roob659625','rooba','Thumb','1622193084637book.png'),(16,'272255','','Photo','1622196772226account.png'),(17,'272255','','Sign','1622196772232book.png'),(18,'devi255192','devikavya','Photo','1622200558693book.png'),(19,'devi255192','devikavya','Sign','1622200558699account.png');
/*!40000 ALTER TABLE `biometric_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-28 19:00:33
