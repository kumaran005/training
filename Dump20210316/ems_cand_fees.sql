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
-- Table structure for table `cand_fees`
--

DROP TABLE IF EXISTS `cand_fees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cand_fees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(450) DEFAULT NULL,
  `tution_fee` varchar(450) DEFAULT NULL,
  `special_fee` varchar(450) DEFAULT NULL,
  `medical_fee` varchar(450) DEFAULT NULL,
  `caution_fee` varchar(450) DEFAULT NULL,
  `lib_fee` varchar(450) DEFAULT NULL,
  `univ_fee` varchar(300) DEFAULT NULL,
  `lic_fee` varchar(300) DEFAULT NULL,
  `red_fee` varchar(300) DEFAULT NULL,
  `mis_fee` varchar(300) DEFAULT NULL,
  `flag_fee` varchar(300) DEFAULT NULL,
  `total_fee` varchar(300) DEFAULT NULL,
  `last_modified_time` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_fees`
--

LOCK TABLES `cand_fees` WRITE;
/*!40000 ALTER TABLE `cand_fees` DISABLE KEYS */;
INSERT INTO `cand_fees` VALUES (4,'Raja125635','32','24','24','24','24','24','2','3','23','2','182','06/13/2021 21:56:13'),(5,'news90315','54','53','NaN','5353','NaN','55','5','353','NaN','35','NaN','06/14/2021 17:19:43'),(6,'venk55947','23','23','23','67','76','7686','7','67','767','68','8807','06/13/2021 22:28:42'),(7,'Raja409544','54','4','NaN','45','65','NaN','NaN','NaN','NaN','65','NaN','06/14/2021 17:58:13'),(8,'test629610',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'06/14/2021 17:14:24'),(9,'Raja708158','23','34','45','56','45','45','65','45','46','45','449','06/14/2021 19:36:54'),(10,'test135138',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'06/14/2021 19:48:22');
/*!40000 ALTER TABLE `cand_fees` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-15 14:00:36
