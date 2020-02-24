-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 24, 2020 at 06:50 PM
-- Server version: 5.7.28-0ubuntu0.16.04.2
-- PHP Version: 7.2.28-3+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shakedeal`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `url` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `brand`, `url`, `created_on`) VALUES
(1, 'alternative', 'http://asasas.in/alt', '2020-02-24 11:57:59'),
(2, 'impact', 'http://im.pct/ok', '2020-02-24 11:57:59');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `url` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`, `url`, `created_on`) VALUES
(1, 'Safety', 'https://www.industrybuying.com/safety-1224/', '2020-02-24 05:41:57'),
(2, 'Agriculture Garden & Landscaping', 'https://www.industrybuying.com/agriculture-garden-landscaping-2384/', '2020-02-24 05:41:57'),
(3, 'Hydraulics', 'https://www.industrybuying.com/hydraulics-4839/', '2020-02-24 05:41:57'),
(4, 'Power Tools', 'https://www.industrybuying.com/power-tools-641/', '2020-02-24 05:41:57'),
(5, 'Welding', 'https://www.industrybuying.com/welding-552/', '2020-02-24 05:41:57'),
(6, 'Office Supplies', 'https://www.industrybuying.com/office-supplies-3227/', '2020-02-24 05:41:57'),
(7, 'Testing & Measuring', 'CATEGORY', '2020-02-24 05:41:57'),
(8, 'Electricals', 'https://www.industrybuying.com/electrical-639/', '2020-02-24 05:41:57'),
(9, 'Pneumatics', 'https://www.industrybuying.com/pneumatics-1139/', '2020-02-24 05:41:57'),
(10, 'Hand Tools', 'https://www.industrybuying.com/hand-tools-629/', '2020-02-24 05:41:57'),
(11, 'Material Handling & Packaging', 'https://www.industrybuying.com/material-handling-and-packaging-1153/', '2020-02-24 05:41:57'),
(12, 'LED\'s & Lights', 'https://www.industrybuying.com/led-lights-13759/', '2020-02-24 05:41:57');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `p_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `p_url` text NOT NULL,
  `brand_id` int(11) NOT NULL,
  `img_url` text,
  `price` float NOT NULL,
  `mrp` float NOT NULL,
  `packing_Qty` int(11) NOT NULL,
  `MOQ` varchar(255) DEFAULT NULL,
  `discount` float DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`p_id`, `name`, `p_url`, `brand_id`, `img_url`, `price`, `mrp`, `packing_Qty`, `MOQ`, `discount`, `category_id`, `created_on`) VALUES
(1, 'it_1', 'sdfs', 1, 'fgdf', 231, 212, 23, 'dfgf', 2, 3, '2020-02-24 11:59:25'),
(2, 'it_2', 'werwe', 1, 'sdf2214dd', 2318, 2120, 34, 'dfgh', 22, 8, '2020-02-24 11:59:25'),
(3, 'it_1', 'dfcxafte', 2, 'sdfdsqqw3', 64342, 63231, 67, 'scvcv', 2, 3, '2020-02-24 11:59:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`p_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
