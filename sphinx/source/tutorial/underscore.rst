.. _underscore:

Underscore syntax
=================

:ref:`Filter`, :ref:`Map` and other nuts that take a function as argument
often use only very simple expressions. For instance, the following code
extracts all number greater than five within range zero to nine:

>>> from nutsflow import *

>>> Range(10) >> Filter(lambda x: x > 5) >> Collect()
[6, 7, 8, 9]

For such simple expressions **nuts-flow** provides a special
*underscore notation*, borrowed from `Scala <https://www.scala-lang.org/>`_,
which results in shorter, more readable code

>>> from nutsflow import _

>>> Range(10) >> Filter(_ > 5) >> Collect()
[6, 7, 8, 9]

This is equivalent to

>>> Range(10) >> Filter(lambda _: _ > 5) >> Collect()
[6, 7, 8, 9]

but eliminates the need for the ``lambda`` keyword and its arguments.
Note that the ``_`` must be imported explicitly, since it is also commonly
used in Python as a placeholder for unused variables.

In contrast to ``lambda`` functions or Scala's underscore the,
underscore notation in **nuts-flow** is very limited and
only supports expressions with arity one, e.g.
``_ + 1``, ``_ <= 3``, ``_ == 5``, ``_[0]``, ...
More complex or nested expressions such as ``_ + _``, ``_ > 5 and _ < 10``
or ``len(_)`` are currently not permitted.

