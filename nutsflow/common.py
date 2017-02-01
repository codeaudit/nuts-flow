"""
.. module:: common
   :synopsis: Common utility functions
"""

import sys

from cStringIO import StringIO


def as_tuple(x):
    """
    Return x as tuple.

    If x is a single item it gets wrapped into a tuple otherwise it is
    changed to a tuple, e.g. list => tuple

    :param item or iterable x: Any item or iterable
    :return: tuple(x)
    :rtype: tuple
    """
    return tuple(x) if hasattr(x, '__iter__') else (x,)


def as_set(x):
    """
    Return x as set.

    If x is a single item it gets wrapped into a set otherwise it is
    changed to a set, e.g. list => set

    :param item or iterable x: Any item or iterable
    :return: set(x)
    :rtype: set
    """
    return set(x) if hasattr(x, '__iter__') else (x,)


def sec_to_hms(duration):
    """
    Return hours, minutes and seconds for given duration.

    >>> sec_to_hms('80')
    (0, 1, 20)

    :param int|str duration: Duration in seconds. Can be int or string.
    :return: tuple (hours, minutes, seconds)
    :rtype: (int, int, int)
    """
    s = int(duration)
    h = s // 3600
    s -= (h * 3600)
    m = s // 60
    s -= (m * 60)
    return h, m, s


def etastr(duration):
    """
    Return estimated time of arrival (ETA) as string derived from duration

    >>> etastr('80')
    '(eta: 0:01:20)'

    :param int|str duration: Duration in seconds. Can be int or string.
    :return: ETA
    :rtype: string
    """
    if not duration:
        return ''
    h, m, s = sec_to_hms(duration)
    return '(eta: {0:d}:{1:02d}:{2:02d})'.format(h, m, s)


class Redirect(object):
    """
    Redirect stdout to string.

    >>> with Redirect() as out:
    ...     print 'test'
    >>> print out.getvalue()
    test
    <BLANKLINE>
    """

    def __init__(self):
        self.oldstdout = sys.stdout
        self.stdout = StringIO()
        sys.stdout = self.stdout

    def __enter__(self):
        return self.stdout

    def __exit__(self, *args):
        sys.stdout = self.oldstdout
