--TEST--
Bug #53854 (Missing constants for compression type)
--EXTENSIONS--
zip
--FILE--
<?php

var_dump(ZipArchive::CM_DEFAULT);
var_dump(ZipArchive::CM_STORE);
var_dump(ZipArchive::CM_SHRINK);
var_dump(ZipArchive::CM_REDUCE_1);
var_dump(ZipArchive::CM_REDUCE_2);
var_dump(ZipArchive::CM_REDUCE_3);
var_dump(ZipArchive::CM_REDUCE_4);
var_dump(ZipArchive::CM_IMPLODE);
var_dump(ZipArchive::CM_DEFLATE);
var_dump(ZipArchive::CM_DEFLATE64);
var_dump(ZipArchive::CM_PKWARE_IMPLODE);
var_dump(ZipArchive::CM_BZIP2);
var_dump(ZipArchive::CM_LZMA);
var_dump(ZipArchive::CM_TERSE);
var_dump(ZipArchive::CM_LZ77);
var_dump(ZipArchive::CM_WAVPACK);
var_dump(ZipArchive::CM_PPMD);
?>
--EXPECT--
int(-1)
int(0)
int(1)
int(2)
int(3)
int(4)
int(5)
int(6)
int(8)
int(9)
int(10)
int(12)
int(14)
int(18)
int(19)
int(97)
int(98)