use greyparrot;

CREATE TABLE `customer_addresses` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) DEFAULT NULL,
  `address` JSON,
  `zip_code` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `zip_code` (`zip_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;