"""
.. module:: test_sink
   :synopsis: Unit tests for sink module
"""

import os

from nutsflow import *


def assert_equal_text(text1, text2):
    assert text1.splitlines() == text2.splitlines()


def test_Sum():
    assert [] >> Sum() == 0
    assert [0, 1, 2] >> Sum() == 3


def test_Reduce():
    assert [] >> Reduce(lambda a, b: a + b, None) == None
    assert [0, 1, 2] >> Reduce(lambda a, b: a + b) == 3
    assert [2] >> Reduce(lambda a, b: a * b, 1) == 2


def test_Nth():
    assert [0, 1, 2, 3] >> Nth(2) == 2


def test_Consume():
    it = iter([0, 1, 2])
    it >> Consume()
    assert next(it, None) is None


def test_Len():
    assert [] >> Len() == 0
    assert [0, 1, 2, 3] >> Len() == 4


def test_Unzip():
    expected = [(1, 4), (2, 5), (3, 6)]
    input = [(1, 2, 3), (4, 5, 6)]

    assert [] >> Unzip() >> Map(tuple) >> Collect() == []
    assert iter(input) >> Unzip() >> Map(tuple) >> Collect() == expected

    assert [] >> Unzip(True) == []
    assert iter(input) >> Unzip(True) == expected


def test_Counts():
    assert [] >> Counts() == dict()
    assert 'abaacc' >> Counts() == {'a': 3, 'b': 1, 'c': 2}


def test_Frequencies():
    assert [] >> Frequencies() == dict()
    assert [2] >> Frequencies() == {2: 1.0}
    assert 'aabaab' >> Frequencies() == {'a': 1.0, 'b': 0.5}


def test_Collect():
    assert [] >> Collect() == []
    assert xrange(5) >> Collect() == [0, 1, 2, 3, 4]
    assert [1, 2, 3, 2] >> Collect(set) == {1, 2, 3}
    assert [('one', 1), ('two', 2)] >> Collect(dict) == {'one': 1, 'two': 2}


def test_CSVWriter():
    filepath = 'tests/data/data_out.csv'
    data = [[1, 2], [3, 4]]

    with CSVWriter(filepath) as writer:
        data >> writer
    assert_equal_text(open(filepath).read(), '1,2\n3,4\n')

    with CSVWriter(filepath, columns=(1,)) as writer:
        data >> writer
    assert_equal_text(open(filepath).read(), '2\n4\n')

    with CSVWriter(filepath, fmtfunc=lambda x: x + 1) as writer:
        data >> writer
    assert_equal_text(open(filepath).read(), '2,3\n4,5\n')

    with CSVWriter(filepath, skipheader=1) as writer:
        data >> writer
    assert_equal_text(open(filepath).read(), '3,4\n')

    with CSVWriter(filepath) as writer:
        [1, 2, 3] >> writer
    assert_equal_text(open(filepath).read(), '1\n2\n3\n')

    os.remove(filepath)


def test_CSVWriter_tsv():
    filepath = 'tests/data/data_out.tsv'
    data = [[1, 2], [3, 4]]

    with CSVWriter(filepath, delimiter='\t') as writer:
        data >> writer
    assert_equal_text(open(filepath).read(), '1\t2\n3\t4\n')

    os.remove(filepath)
